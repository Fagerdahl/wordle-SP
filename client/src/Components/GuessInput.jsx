//Input field for user, guess-btn sent to onSubmitGuess logic
import React, { useState } from "react";
import "./GuessInput.css";

const GuessInput = ({ onSubmitGuess, disabled, onPlayAgain, wordLength }) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (disabled) {
       //When game is over, play again
      onPlayAgain();
      return;
    }

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
        maxLength={wordLength}
        placeholder={`Write a ${wordLength}-letter word`}
      />
      <button className="guess-button" type="submit">
      {disabled ? "Play again" : "Guess"}
      </button>
    </form>
  );
};

export default GuessInput;
