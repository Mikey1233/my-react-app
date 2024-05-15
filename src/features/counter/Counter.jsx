import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increase</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <div>
        <button onClick={() => dispatch(reset())}>reset score</button>
      </div>
    </div>
  );
};

export default Counter;
