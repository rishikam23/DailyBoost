import Weather from './Weather';
import Todo from './Todo';
import Quote from './Quote';
import "./styles.css";

function Overlay() {
  return (
    <div className="overlay">
      <div className="content-wrapper">
        <div className="title">DailyBoost</div>
        <Weather />
        <Todo />
        <Quote />
      </div>
    </div>
  );
}

export default Overlay;