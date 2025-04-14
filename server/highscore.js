//Express router for /api/scores

import express from "express";
import Score from "./models/scoreModel.js";

const router = express.Router();

//POST /api/scores – Save new highscore
router.post("/", async (req, res) => {
  const { username, time, guesses } = req.body;
  try {
    const newScore = new Score({ username, time, guesses });
    await newScore.save();
    res.status(201).json(newScore);
  } catch (err) {
    console.error("Error saving score:", err.message);
    res
      .status(500)
      .json({ message: "Could not save score, sorry", error: err.message });
  }
});

//GET /api/scores – Fetch top 5 scores sorted by time
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find().sort({ time: 1 }).limit(5);
    res.status(200).json(scores);
  } catch (err) {
    console.error("Error fetching scores:", err.message);
    res.status(500).json({ message: "Could not get scores, sorry" });
  }
});

export default router;
