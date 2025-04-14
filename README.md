# wordle-SP
This is a Repository for my own version of a game called wordle. 
GUI is built with React (mobile-first approach)

## MAIN PAGES
1. Start page: where the game is played (React)
2. About us PAGE: (Static) Page with information about the project, tools used, and purpose. Modal with technical information. 
3. Highscore List: (SSR) Has its own URL Route, Data is fetched from mongoDB and page is server-side rendered 

## Server & Functionality
The app runs at: http://localhost:5080

# How the GAME works
A word is randomly selected via a backend API that communicates with mongoDB database.
User enters guesses in a free text field and feedback is provided using colors:
_Green_ = correct letter and position
_Yellow_ = correct letter, wrong position
_Red_ = incorrect letter
## When the correct word is guessed:
The user can enter their name
The result (name, time, guesses) is saved to the mongoDB database. 
If the result gets to the top list, it gets displayed with users name on the highscore page. 

## TECHNICAL STACK
#Frontend: React is my chosen library to build dynamic UI. I will use Vite to bundle and optimize my frontend code. 
#Backend: Node.js + Express. I will use nodemon as a tool for optimized development serverside.
#Database: mongoDB is my database of choise.

## Technical setup
________________
/client (frontend)
npm create vite@latest client --template react       
| Creates a client folder with a configured react project
cd client => npm install
| Install dependencies for frontend
________________
/server (backend)
mkdir server
cd server
npm init -y
| Creates a server folder with package json
________________
## Other dependencies
npm install express
npm install mongoose
npm install nodemon --save-dev
npm install cors (in case of cross origin requests)
npm install cross-env --save-dev | To use port 5080 for both frontend and backend

npm run build
| When done with react development, create a dist/-folder with my entire frontend so that I can deliver static frontend with express. 

## File Structure 
|ROOT|
-client (My React & Vite frontend)
--dist (Bundled frontend folder)




-server (My Express backend with all logic that handles API, db & server)
--server.js (Locic and server runs in the same file)

--models (Mongoose models for mongoDB)
-scoreModel.js (username, time, guesses)
-wordModel.js (a schema for my word-collection)

--views (Templates for SSR)
-highscore.ejs (HTML-look a like to show highscores on /highscore)

-db.js (Handling connection to mongoDB, needs connection to server.js to connect do database before server runs)
-highscore.js (Express router for /api/scores)
-word.js (Express router to get a random word based on a length-parameter from db and return it to frontend)

-package.json
  








