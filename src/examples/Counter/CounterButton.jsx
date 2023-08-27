/**
 * Button component to change the value of the counter
 */
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

import { resolveClasses } from "../../lib";

export function CounterButton({ amount, className = '', style, children, ...other }){

  const { setCounterValue } = useContext(CounterContext);

  return (
    <button
      type={'button'}
      className={resolveClasses(className, 'button counter-button font-mono')}
      onClick={() => setCounterValue(prev => prev + amount)}
      {...other}
    >
      {children}
    </button>
  );

}

export default CounterButton;
