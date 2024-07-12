import React from 'react';
import CounterHoc from '../hoc-component/CounterHoc';

const ComponentTwo = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <p>Component Two - 2 - {counter} </p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default CounterHoc(ComponentTwo, 20, 30);
