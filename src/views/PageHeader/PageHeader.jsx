import React from 'react';
import { NavLink } from 'react-router-dom';
import Counter from '../../examples/Counter/index.js';
import NavLogo from './NavLogo.jsx';

// Use a pattern like this to define the header links outside of the
// PageHeader component if they'll be used elsewhere in the app.
// ...
// const headerLinks = [
//   ['Home', { exact: true, to: '/' }],
//   ['Counter', { exact: true, to: '/counter' }],
//   ['Evil', { to: '/counter/666' }]
// ];

export function PageHeader() {
  return (
    <div id={'page-header'} className={'sticky top-0 flex items-center justify-between shadow-down-sm'}>
      <NavLogo/>
      <nav id={'main-nav'} className={'flex items-center'}>
        <NavLink exact to={'/'}>Home</NavLink>
        <NavLink exact to={'/counter'}>Counter</NavLink>
        <NavLink to={'/counter/666'}>Evil</NavLink>
      </nav>
      <div className={'m-x-4'}>
        <small className={'counter-value'}>
          Total Count: <Counter.Output className={'font-bold'}/>
        </small>
      </div>
    </div>
  );
}

export default PageHeader;
