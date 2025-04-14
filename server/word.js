//Express router to get a random word based on a length-parameter from db and return it to frontend
import express from "express";
import Word from "./models/wordModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  //Incoming logic
});
export default Word;
