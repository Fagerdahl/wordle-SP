//This is for the iframe (SSR+SPA)
import React from "react";
import "./Highscore.css";

const Highscore = () => {
  return (
    <div className="highscore-wrapper">
      <iframe
        src="http://localhost:5080/highscore"
        title="Highscore"
        className="highscore-iframe"
      />
    </div>
  );
};

export default Highscore;
