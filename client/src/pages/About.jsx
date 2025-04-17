//Static page about this project
import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [showModal, setShowModal] = useState(false);

  const handleReadMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="about-page">
      <h1>Welcome to my version of Wordle</h1>
      <p className="about-description">
        This project was part of a Fullstack education program at Lernia
        Yrkeshögskola.
        <br />
        My Goal was to create a Fun & Interactive Game based on Fullstack
        Development.
        <br />
        Built with ❤️ & a lot of debugging!
      </p>

      <button onClick={handleReadMore}>Read More...</button>

      {showModal && (
        <div className="backdrop">
          <div className="modal">
            <h2>Technical Information</h2>
            <p className="modal-text">
              <strong>Frontend:</strong> React + Vite <br />
              <strong>Backend:</strong> Express + Node.js <br />
              <strong>Database:</strong> MongoDB (Mongoose) <br />
              <strong>Programming Language:</strong> JavaScript <br />
              <strong>+ JSX:</strong> JavaScript-syntax-extension <br /> for
              react components <br />
              <strong>Template Engine:</strong> SSR-HTML
              <br /> with EJS Templates <br />
              <strong>Styling:</strong> CSS Custom Properties, <br /> Flexbox &
              Grid <br />
            </p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
      <a href="/" className="play-btn">
        ▶️ Play Wordle
      </a>
    </div>
  );
};

export default About;
