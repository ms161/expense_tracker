import classes from "./Counter.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { counterActions } from "./Store/Store";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.showCounter);
  console.log(show);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandlerBy5 = () => {
    dispatch(counterActions.incrementBy5());
  };
  const decrementHandlerBy5 = () => {
    dispatch(counterActions.decrementBy5());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //{type:SOME_UNIQUE_IDENTIFIER_,payload:10}
  };

  const toggleCounterHandler = () => {
    console.log("clicked");
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div style={{ margin: "1rem" }}>
        <button onClick={incrementHandler} style={{ margin: "1rem" }}>
          increment
        </button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementHandlerBy5} style={{ margin: "1rem" }}>
          increment by 5
        </button>
        <button onClick={decrementHandlerBy5}>decrement by 5</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
