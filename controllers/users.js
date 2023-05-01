const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

require("dotenv").config();

const { TOKEN_KEY } = process.env;

const {
  SERVER_ERROR,
  BAD_REQUEST,
  SUCCESS_MSG
} = require("../utils/constants");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}

exports.getOneUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    res.send(user);
  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}

exports.createAccount = async (req, res) => { 
  try {
      // Get user input
    const { firstName, lastName, email, password, type = 'user' } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      return res.status(BAD_REQUEST.code).send("All input is required");
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      type
    });

    // Create token
    const authToken = await jwt.sign(
      { user_id: user._id, email },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    userData = {
      authToken
    };

    // return new user
    res.status(201).json(userData);

  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}

exports.login = async (req, res) => { 
  try {
      // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(BAD_REQUEST.code).send("All input is required");
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser && (await bcrypt.compare(password, existingUser._doc.password))) {

      // Create token
    const authToken = await jwt.sign(
      { user_id: existingUser._id, email },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

      userData = {
        authToken
      };

      // user
      return res.status(201).json(userData);
    }
    res.status(BAD_REQUEST.code).send("Invalid Credentials");

  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}

exports.googleLogin = async (req, res) => {
  try {
      // Get user input
    const { email, name } = req.body;

    // Validate user input
    if (!(email && name)) {
      return res.status(BAD_REQUEST.code).send("All input is required");
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    let user;

    if (!existingUser) {
      user = await User.create({
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1],
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: 'none',
        type: 'user'
      });
    }

      // Create token
    const authToken = await jwt.sign(
      { user_id: existingUser ? existingUser._id : user._id, email },
      TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

      userData = {
        authToken
      };

      // user
      res.status(201).json(userData);

  } catch (error) {
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
}