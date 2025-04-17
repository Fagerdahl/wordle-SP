// GameBoard renders the game grid based on actual guesses and solution.
// guesses - Array of users guessed words.
// solution - The correct word to compare users guess against.
import React from "react";
import "./GameBoard.css";

const GameBoard = ({ guesses, solution }) => {
  const rows = 6;
  const columns = solution.length;

  return (
    <div className="board-container" style={{ "--cols": columns }}>
      {Array.from({ length: rows }).map((_, rowIndex) => {
        const guess = guesses[rowIndex] || "";

        return (
          <div className="board-row" key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => {
              const letter = guess[colIndex] || "";
              const color = getCellColor(letter, colIndex, guess, solution);

              return (
                <div
                  className={`board-cell ${color} ${letter ? "flip" : ""}`}
                  key={colIndex}
                  style={{ animationDelay: `${colIndex * 150}ms` }}
                >
                  {letter.toUpperCase()}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

/* Color feedback for each letter.
 Green = correct position
 Yellow = wrong position
 Red = not in word */

function getCellColor(letter, colIndex, guess, solution) {
  if (!letter) return "empty"; //empty cell
  if (letter.toLowerCase() === solution[colIndex]?.toLowerCase()) {
    return "correct"; //green
  }
  if (solution.toLowerCase().includes(letter.toLowerCase())) {
    return "misplaced"; //yellow
  }
  return "incorrect"; //red
}

export default GameBoard;
