//This is for the iframe (SSR+SPA)
import React from "react";

const Highscore = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <iframe
        src="http://localhost:5080/highscore"
        //Props
        title="Highscore"
        width="100%"
        height="600px"
        //Inline
        style={{
          maxWidth: "1200px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
};

export default Highscore;
