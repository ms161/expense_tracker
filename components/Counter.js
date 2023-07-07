import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Counter = () => {

 const counter= useSelector(state=>state.counter)
 const dispatch=useDispatch()
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type:'increment'})

  }
  const decrementHandler=()=>{
dispatch({type:'decrement'})
  }

  const incrementHandlerBy5=()=>{
    dispatch({type:'incrementBy5'})

  }
  const decrementHandlerBy5=()=>{
dispatch({type:'decrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div style={{margin:'1rem'}}>
        <button onClick={incrementHandler} style={{margin:'1rem'}}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementHandlerBy5} style={{margin:'1rem'}}>increment by 5</button>
        <button onClick={decrementHandlerBy5}>decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
