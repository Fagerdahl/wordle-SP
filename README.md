# wordle-SP
This is a Repository for my own version of a game called **wordle** built as a fullstack project using React, Express, and MongoDB. The app is designed **mobile-first** using Vite for fast frontend bundling.


## MAIN PAGES
1. 🎮 Start page: where the game is played (React)
2. 💌 About us PAGE: (Static) Page with information about the project, tools used, and purpose. Modal with technical information. 
3. 🏆 Highscore List: (SSR) Has its own URL Route, Data is fetched from mongoDB and page is server-side rendered 

## Server & Functionality
The app runs at: `http://localhost:5080`
Built with **React frontend + Express backend**
Data is stored in **MongoDB**

# 🎯 How the GAME works
A word is randomly selected via a backend API that communicates with mongoDB database.
User enters guesses in a free text field and feedback is provided using colors:
🟩 Green = correct letter and position
🟨Yellow = correct letter, wrong position
🟥Red = incorrect letter
## ✅ When the correct word is guessed:
The user can enter their name
The result (`name`, `time`, `guesses`) is saved to the mongoDB database. 
Top scores are shown on `/highscore` (SSR using EJS)

## 💻 TECH STACK

### 🖼️ **Frontend**
- React (SPA)
- Vite (for fast builds & dev server)


### ⚙️ **Backend** 
- Node.js
- Express
- Nodemon (for live backend development)

### 🗄️ **Database**
- MongoDB (with Mongoose)

## Technical setup / Dependencies
### 📁 /client (frontend)
```bash
npm create vite@latest client --template react       
|=> Creates a client folder with a configured react project
cd client 
npm install
|=> Installing dependencies for frontend
```
### 🍑 /server (backend)
```bash
mkdir server
cd server
npm init -y
|=> Creates a server folder with package json

## Other dependencies 
npm install express
npm install mongoose
npm install nodemon --save-dev
npm install cors 
|=> in case of cross origin requests
npm install cross-env --save-dev 
|=> To use port 5080 for both frontend and backend

npm run build
|=> When done with react development, creates a distfolder with my entire frontend so that I can deliver static frontend with express. 
```
client terminal♥️server terminal= ´npm run dev´ for both frontend and backend (concurrently) 
_Reminder: Echo cli and ascii banner with figlet could be so much fun to make a personal touch to my app_
```bash 
cd ..
npm install concurrently --save-dev
npm init -y 
``` 

## 📁 File Structure 
**ROOT**
📁client (My React & Vite frontend)
📁dist (Bundled frontend folder- This is my production version- Built by vite, not me)
📁public (static files that is untouched by vite until I make the build. 
    ex: favicons, logos)
    index.html (The first page load when visiting my page, react renders later in the root div and this html is the base for my entire frontend. Vite uses this one with npm run build)

📁src (This contains my real code that gets bundled by vite for my react app)
    📁assets 
    📁Components (Reusable components for my project)
        -GameBoard.jsx (Wordle grid, 6 rows, 5 letters each. Colors the cells for relevant feedback)
        -GuessInput.jsx (Input field for user, guess-btn sent to onSubmitGuess logic)
        -Navbar.jsx (Menu for my pages)
        -ScoreList.jsx
    📁pages
        -About.jsx
        -Highscore.jsx
        -Home.jsx
    📁src
        -App.jsx (The heart of my React app, This contains routing and layout for my SPA. It takes over the index.html)
        -main.jsx (Startfile for React. It tells index.html to render App component in root. main.jsx decides which component is active and runs after index.html pageload. React uses this one)  


📁server (My Express backend with all logic that handles API, db & server)
📁utils (folder for functionality connected to my components)
    -getCellColor.js
    
📁server.js (Logic and server runs in the same file)

📁models (Mongoose models for mongoDB)
    -scoreModel.js (username, time, guesses)
    -wordModel.js (a schema for my word-collection)

📁views (Templates for SSR)
    -highscore.ejs (HTML-look a like to show highscores on /highscore)

-db.js (Handling connection to mongoDB, needs connection to server.js to connect do database before server runs)
-highscore.js (Express router for /api/scores)
-word.js (Express router to get a random word based on a length-parameter from db and return it to frontend)

-package.json

-.env (MONGO_URI=mongodb://localhost:27017/wordledb 
PORT=5080) To keep sensitive info outside the code, especially when/if using Atlas Cluster

-.gitignore
    --node_modules
    --client/node_modules
    --server/node_modules
    --.env 
    --client/dist/ 



### Links ### 
https://gist.github.com/roachhd/1f029bd4b50b8a524f3c | Emojis










