//Input field for user, guess-btn sent to onSubmitGuess logic
import React, { useState } from "react";
import "./GuessInput.css";

export default function GuessInput({ onSubmitGuess, disabled, wordLength }) {
  const [currentGuess, setCurrentGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentGuess.length !== wordLength) {
      alert(`Guessed word must be ${wordLength} characters in length!`);
      return;
    }

    onSubmitGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <form className="guess-form" onSubmit={handleSubmit}>
      <input
        className="guess-input"
        type="text"
        maxLength={wordLength}
        placeholder={`type here`}
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
        disabled={disabled}
      />
      <button className="guess-button" type="submit" disabled={disabled}>
        Guess
      </button>
    </form>
  );
}
