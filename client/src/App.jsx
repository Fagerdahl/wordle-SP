//Routing and layout for my SPA
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Highscore from "./pages/Highscore";
//Global layout component
import Navbar from "./Components/Navbar";


//If URL is unmatched, this is the fallback component (inline atm)
const NotFound = () => (
  <div style={{ textAlign: "center", padding: "2rem" }}>
    <h2>404 - Page not found</h2>
    <p>The page you're looking for doesn't exist!</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home – main gameplay */}
        <Route path="/" element={<Home />} />
        {/* About – static info page */}
        <Route path="/about" element={<About />} />
        {/* Highscore – SSR+SPA=Iframe */}
        <Route path="/highscore" element={<Highscore />} />
        {/* Fallback if URL unmatched */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
