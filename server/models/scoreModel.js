//username, time, guesses
import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  time: { type: Number, required: true },
  guesses: { type: Number, required: true },
  wordLength: { type: Number, required: true }
});

const Score = mongoose.model("Score", scoreSchema);

export default Score;
