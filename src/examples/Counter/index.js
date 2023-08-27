import { CounterContext, CounterProvider } from './CounterContext.jsx';
import CounterView from './CounterView.jsx';
import CounterOutput from './CounterOutput.jsx';

import './style.css';

// export { CounterView as default } from './CounterView';

export const Context = CounterContext;
export const Provider = CounterProvider;
export const View = CounterView;
export const Output = CounterOutput;

export const Counter = {
  Context,
  Provider,
  View,
  Output
}

export default Counter;
