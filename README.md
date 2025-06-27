# DailyBoost

**DailyBoost** is a productivity and positivity web app built using React. It features:
- A dynamic background from Unsplash that zooms in and out slightly
- A to-do list with editable tasks, persistent storage, and scrollable overflow
- Live weather information based on your location
- A motivational quote fetched from an API

---

## Features

- Dynamic background image (nature-themed, changes on load)  
- To-do list with:
    - Add, edit (via double-click), delete tasks
    - Tasks persist using `localStorage`
    - Scrollable when tasks overflow  
- Live weather (via OpenWeatherMap API)  
- Motivational quote (via API Ninjas)  
- Fully responsive layout (works on mobile, tablet, desktop)

---

## Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/your-username/dailyboost-react.git
cd dailyboost-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npm start
```
This will start the development server at:  
`http://localhost:3000`

---

## Project Structure

```
src/
├── components/
│   ├── Background.js
│   ├── Todo.js
│   ├── Weather.js
│   ├── Quote.js
│   └── styles.css
├── App.js
├── index.js
├── App.css
└── index.css
```

---

## API Keys

Create a `.env` file at your project root and add:

```
REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_key
REACT_APP_WEATHER_API_KEY=your_openweathermap_key
REACT_APP_QUOTE_API_KEY=your_api_ninjas_key
```

Replace `your_*_key` with your actual API keys.

---

## License
This project is open-source and free to use. Attribution appreciated!

--- 

## Suggestions and Contributions
Any suggestions, improvements or contributions are welcome!