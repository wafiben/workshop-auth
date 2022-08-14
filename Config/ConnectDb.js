require("dotenv").config();
const mongoose = require("mongoose");
const URL =
  "mongodb+srv://wafi:54900777@cluster0.eoklw.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(URL);

    console.log("db is successfully connected");
  } catch (error) {
    console.log("db failed to connect");
  }
};
module.exports = connectDb;
