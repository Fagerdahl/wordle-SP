import React, { useState } from "react";
import "./Navbar.css";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">WORDLE</div>

      <button
        className="navbar-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a
            href="/"
            className={window.location.pathname === "/" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={window.location.pathname === "/about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/highscore"
            className={window.location.pathname === "/scores" ? "active" : ""}
          >
            Highscores
          </a>
        </li>
      </ul>
    </nav>
  );
}
