import Background from './components/Background';
import Weather from './components/Weather';
import Quote from './components/Quote';
import Todo from './components/Todo';
import './App.css';

function App() {
  return (
    <>
      <Background />
      <div className="overlay">
        <div id="content-wrapper">
          <h1 id="app-title">DailyBoost</h1>
          <Weather />
          <Quote />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;