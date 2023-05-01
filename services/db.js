require("dotenv").config();

const { DBURI } = process.env;

const mongoose = require("mongoose");

mongoose.connect(DBURI, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;