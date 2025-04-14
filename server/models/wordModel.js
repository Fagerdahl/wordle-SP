//A schema for my word-collection
import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

const Word = mongoose.model("Word", wordSchema);

export default Word;
