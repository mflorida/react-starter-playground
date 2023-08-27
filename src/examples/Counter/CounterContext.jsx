import React, { createContext, useEffect, useState } from 'react';

const defaultContext = {
  counterValue: 0,
  setCounterValue: value => value
};


/**
 * This is the Context Creator!
 * @type {React.Context<{counterValue: number, setCounterValue: (function(*): *)}>}
 */
export const CounterContext = createContext(defaultContext);


/**
 * This is the Context Provider!
 * @param {Object} [props] - Optional props object
 * @returns {JSX.Element}
 */
export function CounterProvider(props){

  const {
    value = 0,
    children = null
  } = props;

  const [counterValue, setCounterValue] = useState(value);

  useEffect(() => {
    setCounterValue(value);
  }, [value]);

  return (
    <CounterContext.Provider value={{ counterValue, setCounterValue }}>
      {children}
    </CounterContext.Provider>
  );
}
