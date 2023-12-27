import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./store/index.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch(actions.increment());
  }
  function decrement() {
    dispatch(actions.decrement());
  }
  function reset() {
    dispatch(actions.reset());
  }
  function addByTen() {
    dispatch(actions.addByTen(10));
  }
  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button className="grey-pill" onClick={increment}>
        Increment
      </button>
      <button className="blue-pill" onClick={decrement}>
        Decrement
      </button>
      <button className="green-pill" onClick={reset}>
        Reset
      </button>
      <button className="yellow-pill" onClick={addByTen}>
        Add By 10
      </button>
    </div>
  );
}

export default App;
