import React, { useContext } from 'react';
import Counter from '../../examples/Counter/index.js';

export const NavLogo = () => {

  const { setCounterValue } = useContext(Counter.Context);

  function handleLogoClick(e){
    e.preventDefault();
    setCounterValue(count => count + 1);
    window.location.hash = '#/';
  }

  return (
    <a href={'#'} title={'click to add a thing'} onClick={handleLogoClick} id={'nav-logo'} className={'font-bold'}>
      F
    </a>
  );
};

export default NavLogo;
