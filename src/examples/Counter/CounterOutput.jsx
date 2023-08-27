/**
 * Renders *only* the counter value inside an <i>
 */
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext.jsx';

export function CounterOutput({ className = '', ...props }){
  const { counterValue } = useContext(CounterContext);
  const formattedValue = new Intl.NumberFormat().format(counterValue);
  return (
      <i className={['counter-value font-normal', className].join(' ').trim()} {...props}>
        {formattedValue}
      </i>
  )
}

export default CounterOutput;
