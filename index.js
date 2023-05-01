const express = require("express");
const cors = require("cors");
const mongoose = require("./services/db");

require("dotenv").config();

const app = express();

const { PORT } = process.env;

const port = PORT;

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', require('./routes'));

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});