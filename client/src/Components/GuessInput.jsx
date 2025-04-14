//Input field for user, guess-btn sent to onSubmitGuess logic
import React, { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({ onSubmitGuess }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      alert("Guessed word must be 5 characters in length!");
      return;
    }
    onSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-form">
      <input
        className="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        placeholder="Write your guess"
      />
      <button className="guess-button" type="submit">
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
