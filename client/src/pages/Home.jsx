import React, { useState, useEffect } from "react";
import GameBoard from "../Components/GameBoard";
import GuessInput from "../Components/GuessInput";
import Confetti from "react-confetti";
import "./message.css";
import "./About.css";

const Home = () => {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [username, setUsername] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [onlyUniqueLetters, setOnlyUniqueLetters] = useState(false);

  const [wordLength, setWordLength] = useState(5);

  const handleWordLengthChange = (e) => {
    const newLength = parseInt(e.target.value);
    setWordLength(newLength);
    resetGame(newLength);
  };

  const fetchRandomWord = async (
    length = wordLength,
    unique = onlyUniqueLetters
  ) => {
    try {
      const res = await fetch(
        `http://localhost:5080/api/word?length=${length}&unique=${unique}`
      );
      const data = await res.json();
      setSolution(data.word);
      setStartTime(Date.now());
    } catch (err) {
      console.error("Error fetching word:", err);
      setSolution("apple");
      setStartTime(Date.now());
    }
  };

  useEffect(() => {
    fetchRandomWord();
  }, []);

  const handleAddGuess = (guess) => {
    if (!gameOver && guesses.length < 6) {
      const newGuesses = [...guesses, guess];
      setGuesses(newGuesses);

      if (guess.toLowerCase() === solution.toLowerCase()) {
        setMessage("Well done!");
        setWin(true);
        setGameOver(true);
      } else if (newGuesses.length === 6) {
        setMessage(`Game over! The word was: ${solution}`);
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    if (win) {
      const timer = setTimeout(() => {
        resetGame();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [win]);

  useEffect(() => {
    if (gameOver && startTime && !hasSubmitted) {
      const finalUsername = username.trim() !== "" ? username : "Anonymous";
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const gameResult = {
        username: finalUsername,
        time: elapsedTime,
        guesses: guesses.length,
      };
      submitScore(gameResult);
      setHasSubmitted(true);
    }
  }, [gameOver, startTime, username, guesses, hasSubmitted]);

  const resetGame = (newLength = wordLength) => {
    setGuesses([]);
    setMessage("");
    setWin(false);
    setGameOver(false);
    setHasSubmitted(false);
    fetchRandomWord(newLength, onlyUniqueLetters);
  };

  return (
    <div>
      <h1>Wordle Game</h1>
      {/* Dropdown for word length */}
      <label htmlFor="wordLength">Choose word length:</label>{" "}
      <select
        id="wordLength"
        value={wordLength}
        onChange={handleWordLengthChange}
        //Disable changes in length while playing
        disabled={!gameOver && guesses.length > 0}
      >
        <option value={4}>4 letters</option>
        <option value={5}>5 letters</option>
        <option value={6}>6 letters</option>
      </select>
      {/* Checkbox for only unique letters */}
      <label style={{ display: "block", marginTop: "1rem" }}>
        <input
          type="checkbox"
          checked={onlyUniqueLetters}
          onChange={(e) => setOnlyUniqueLetters(e.target.checked)}
          disabled={!gameOver && guesses.length > 0}
        />
        Only use unique letters
      </label>
      {win && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.4}
        />
      )}
      <GameBoard guesses={guesses} solution={solution} />
      {message && (
        <div
          className={`message ${
            message.startsWith("Well done") ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}
      <GuessInput onSubmitGuess={handleAddGuess} disabled={gameOver} />
      {gameOver && !hasSubmitted && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>Whats your name?:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            style={{ padding: "8px", fontSize: "1rem" }}
          />
        </div>
      )}
    </div>
  );
};

async function submitScore(result) {
  try {
    const response = await fetch("http://localhost:5080/api/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });
    if (!response.ok) {
      throw new Error("Could not save the Score, sorry!");
    }
    const data = await response.json();
    console.log("Score saved:", data);
  } catch (error) {
    console.error("Error when saving Score:", error);
  }
}

export default Home;
