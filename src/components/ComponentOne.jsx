import React from 'react';
import CounterHoc from '../hoc-component/CounterHoc';

const ComponentOne = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <p>Component One - 1 - {counter}</p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default CounterHoc(ComponentOne, 10, 20);
