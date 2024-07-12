import React from 'react';
import CounterHoc from '../hoc-component/CounterHoc';

const ComponentThree = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <p>Component Three - 3 - {counter}</p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default CounterHoc(ComponentThree, 30, 40);
