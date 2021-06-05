const mongodb = require("mongodb");
require('dotenv').config();
const mongoose = require("mongoose");

const mongoConnect = () => {
  mongoose.connect(process.env.DB_CODE,{ useUnifiedTopology: true, useNewUrlParser: true }
    ).then(
      console.log("Connected!")
    ).catch((err) => console.log(err));
}

module.exports = mongoConnect;
