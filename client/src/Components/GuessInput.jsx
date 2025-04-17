//Input field for user, guess-btn sent to onSubmitGuess logic
import React, { useState } from "react";
import "./GuessInput.css";

export default function GuessInput({ onSubmitGuess, disabled, wordLength }) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [shake, setShake] = useState(false);

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentGuess.length !== wordLength) {
      triggerShake();
      return;
    }
    onSubmitGuess(currentGuess);
    setCurrentGuess("");
  };

  return (
    <form
      className={`guess-form ${shake ? "shake" : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        className="guess-input"
        type="text"
        maxLength={wordLength}
        placeholder={`Write a ${wordLength}-letter word`}
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        disabled={disabled}
      />
      <button className="guess-button" type="submit" disabled={disabled}>
        Guess
      </button>
    </form>
  );
}
