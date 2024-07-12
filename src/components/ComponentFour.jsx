import React from 'react';
import CounterHoc from '../hoc-component/CounterHoc';

const ComponentFour = ({
  counter,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <>
      <p>Component Four - 4 - {counter} </p>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default CounterHoc(ComponentFour, 40, 50);
