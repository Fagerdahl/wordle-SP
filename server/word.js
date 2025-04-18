//Express router to get a random word based on a length-parameter from db and return it to frontend
import express from "express";
import Word from "./models/wordModel.js";

const router = express.Router();

//Helpfunction for unique letters
const hasUniqueLetters = (word) => {
  const letters = new Set(word.toLowerCase());
  return letters.size === word.length;
};

router.get("/", async (req, res) => {
  const length = parseInt(req.query.length) || 5;
  const unique = req.query.unique === "true";

  try {
    const match = { length };

    if (unique) {
      //regex, no repeating letters
      match.word = { $not: /(.).*\1/ };
    }

    const randomWordArray = await Word.aggregate([
      { $match: match },
      { $sample: { size: 1 } },
    ]);

    if (randomWordArray.length === 0) {
      return res.json({ word: "apple" });
    }
    const randomWord = randomWordArray[0].word;
    return res.json({ word: randomWord });
  } catch (err) {
    console.error("Error fetching word:", err);
    res.status(500).json({ message: "Error fetching word" });
  }
});

export default router;
