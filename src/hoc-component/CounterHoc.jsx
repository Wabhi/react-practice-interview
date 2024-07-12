import React, { useState } from 'react';

const CounterHoc = (WrapperComponent, initialValue = 0, steps = 1) => {
  return (props) => {
    const [counter, setCounter] = useState(initialValue);

    const handleIncrement = () => {
      setCounter((prev) => prev + steps);
    };

    const handleDecrement = () => {
      setCounter((prev) => prev - steps);
    };

    const handleReset = () => {
      setCounter(initialValue);
    };

    return (
      <WrapperComponent
        {...props}
        counter={counter}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    );
  };
};

export default CounterHoc;
