import React, { useEffect, useState } from 'react';
import useTimeout from '../hooks/useTimeout.js';
import { RoundedPanel } from '../components/index.js';

export function Home(){

  const [showing, setShowing] = useState(false);
  const [delay, setDelay] = useState(3000);

  useTimeout(() => {
    setShowing(true);
  }, delay);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelay(0);
      console.log('Timed out');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const panelStyle = {
    marginTop: 32
  }

  return (
    <div id={'home'}>

      <RoundedPanel>
        <h1 className={'m-y-0 m-b-8'}>Home</h1>
        {showing && (
          <div className={'flex flex-col'}>
            <hr/>
            <h2 className={'m-y-0 m-t-8'}>Hello.</h2>
          </div>
        )}
      </RoundedPanel>

      <RoundedPanel className={'m-y-8'} style={panelStyle}>
        <h3>What is up?</h3>
      </RoundedPanel>

      <RoundedPanel className={'m-y-8'} style={panelStyle}>
        <h4>Nothing.</h4>
      </RoundedPanel>

      <RoundedPanel className={'m-y-8'} style={panelStyle}>
        <h5>Cool.</h5>
      </RoundedPanel>

      <RoundedPanel className={'m-y-8'} style={panelStyle}>
        <h6>Totally. 😎</h6>
      </RoundedPanel>

    </div>
  );

}

export default Home;
