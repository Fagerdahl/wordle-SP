//Menu for my pages

import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  padding: "1rem",
  background: "#eee",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "1.2rem",
};

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      {/* Extern link to ssr highscore page */}
      <a
        href="http://localhost:5080/highscore"
        style={linkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        Highscore
      </a>
    </nav>
  );
}
