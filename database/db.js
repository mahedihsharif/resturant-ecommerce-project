const mongoose = require("mongoose");

const MONGO_URL = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://restaurantUser:restaurantPassword@cluster0.taqt5.mongodb.net/restaurantApp?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database is connected successfully...");
  } catch (err) {
    console.log(err);
  }
};
module.exports = MONGO_URL;
