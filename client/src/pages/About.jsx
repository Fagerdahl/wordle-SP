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
        This project was part of a Fullstack education program at Lernia Yrkeshögskola.
        <br />
        My Goal was to create a Fun & Interactive Game based on Fullstack Development.
        <br />
        Built with ❤️ & a lot of debugging!
      </p>

      <button onClick={handleReadMore}>Read More...</button>

      {showModal && (
        <div className="backdrop">
          <div className="modal">
            <h2>Technical Information</h2>
            <p className="modal-text">
              Frontend: React + Vite <br />
              Backend: Express + Node.js <br />
              Database: MongoDB (Mongoose) <br />
              Language: JavaScript <br />
            </p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
