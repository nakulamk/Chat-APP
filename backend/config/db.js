const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://gowdanakula7:Mt4WdYlMcXDVawiM@cluster0.eqyqwea.mongodb.net/mernChatApp?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
    );

    console.log(
      `Mongo DataBase Connection SuccessFull:....`.bgWhite.yellow.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
