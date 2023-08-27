import React, { useContext } from 'react';
import Counter from '../examples/Counter/index.js';
import { FlexSpacer } from '../components/index.js';

export const Footer = () => {

  const { counterValue } = useContext(Counter.Context);

  const footerStyle = {
    bottom: 0,
    padding: 20,
    color: 'white',
    background: 'var(--gray-50)'
  };

  const classes = [
    'footer',
    'shadow-up-sm m-t-8 sticky',
    'flex items-center justify-between',
    'whitespace-nowrap'
  ].join(' ').trim();

  return (
    <footer style={footerStyle} className={classes}>
      <span>
        {counterValue < 0 ? 'You have NEGATIVE things???' : null}
        {counterValue === 0 ? 'You have NOTHING!' : null}
        {counterValue === 1 ? 'You have ONE thing.' : null}
        {(counterValue > 1 && counterValue < 100) ? 'You have SOME things.' : null}
        {(counterValue >= 100 && counterValue < 1000) ? 'You have A LOT of things.' : null}
        {counterValue >= 1000 ? 'You have WAY TOO MANY things!!!' : null}
      </span>
      <FlexSpacer as={'span'}/>
      <span><b>TOTAL THINGS: <Counter.Output/></b></span>
    </footer>
  );

};

export default Footer;
