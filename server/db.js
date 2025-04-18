//Handling connection to mongoDB, needs connection to server.js to connect do database before server runs
import mongoose from "mongoose";

//Async operation since "connect" takes a while
const connectDB = async () => {
  try {
    //if no global variable exists- my local database is used
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/wordledb",
      {}
    );
    console.log("Connected to mongoDB");
  } catch (err) {
    console.error("MongoDB-error", err.message);
    //Exit the program to avoid running the server without database
    process.exit(1);
  }
};

export default connectDB;
