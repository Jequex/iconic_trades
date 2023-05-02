const express = require("express");
const cors = require("cors");
const mongoose = require("./services/db");

const path = require('path');

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

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('iconic-trade/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'iconic-trade', '.next', 'server', 'pages'))
    })
}

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});