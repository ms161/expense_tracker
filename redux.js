const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  ////  input:old state + dispatched action  output: new state object
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "increment" });
}
store.dispatch({ type: "decrement" });
