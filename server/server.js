//Main backend entry point where backend gets dressed and ready to serve!
//All logic and routes live here, making the backend available to the frontend and browser💍
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./db.js";
import wordRoutes from "./word.js";
import Score from "./models/scoreModel.js";
import highscoreRoutes from "./highscore.js";

//Load environment variables from .env
dotenv.config({ path: "./.env" });
console.log("Loaded MONGO_URI:", process.env.MONGO_URI || "USING FALLBACK URI");

//Initialize app & database
connectDB();

const app = express();
const PORT = process.env.PORT || 5080;

//Middleware, allows different origins (react-port & express-port)
app.use(cors());
app.use(express.json());

//Set up EJS for SSR, so that express knows where to find ejs-files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Serving public folder (CSS for highscore, mm)
app.use(express.static(path.join(__dirname, "public")));

//API Routes
app.use("/api/word", wordRoutes);
app.use("/api/scores", highscoreRoutes);

//SSR-views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//SSR: GET /highscore – Render top 5 scores via EJS
app.get("/highscore", async (req, res) => {
  try {
    const scores = await Score.find().sort({ time: 1 }).limit(5);
    res.render("highscore", { scores });
  } catch (error) {
    console.error("Error rendering highscore page:", error.message);
    res.status(500).send("Error loading highscore list");
  }
});

//SSR: GET /highscore/:length – Filtered by word length
app.get("/highscore/:length", async (req, res) => {
  const wordLength = parseInt(req.params.length);
  try {
    const scores = await Score.find({ wordLength }).sort({ time: 1 }).limit(5);
    res.render("highscore", { scores });
  } catch (error) {
    console.error("Error fetching filtered highscore:", error.message);
    res.status(500).send("Error loading filtered highscore");
  }
});

//Serve Vite build (frontend)
app.use(express.static(path.join(__dirname, "../client/dist")));

//Catch all for React Router (serving index.html for any other route)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

//Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
