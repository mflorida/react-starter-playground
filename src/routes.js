/**
 * Array of routes for app
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Counter, { View as CounterView } from './examples/Counter/index.js';
import Home from './views/Home.jsx';

export const ROUTES = [
  {
    paths: [
      '/',
      '/home'
    ],
    exact: true,
    children: <Home/>
  },
  {
    paths: [
      '/counter/:count',
      '/counter',
      '/examples/counter'
    ],
    exact: true,
    children: <CounterView/>
  },
  {
    paths: [
      '/count',
      '/examples/count'
    ],
    exact: true,
    redirect: {
      to: '/counter'
    }
  },
  {
    paths: ['/nothing'],
    exact: true,
    render: () => <small>Nothing</small>
  },
  {
    path: '/nope',
    exact: true,
    children: <Redirect to={'/nothing'}/>
  }
];

function pushRoutes(A, B){
  for (let route of [...[].concat(B)]) {
    // This *should* eliminate duplicates (by reference)
    if (A.includes(route)) {
      console.warn('Duplicate Route reference', route);
    }
    else {
      A.push(route);
    }
  }
  return A;
}

/**
 * Returns a function which can be used to render
 * <Route> components
 * @param routes
 * @returns {function(*=): *}
 */
export function withRoutes(routes = []){

  const _routes = pushRoutes([], routes);

  console.log('withRoutes()', _routes);

  // pass an array of route configs
  // to the returned function to put
  // *after* the standard routes
  return function(B = []){

    pushRoutes(_routes, B);

    console.log('withRoutes()()', _routes);

    return _routes.map((route, i) => {

      const {
        path = null,
        paths = null,
        redirect = null,
        children = null,
        render = () => null,
        ..._route
      } = route;

      const _paths = [].concat(path || paths || []);

      return (
        <React.Fragment key={i}>
          {_paths.map((_path, ii) => (
            <Route key={ii} path={_path} {..._route}>
              {redirect ? (
                <Redirect {...redirect}/>
              ) : (
                children || render(route, _path)
              )}
            </Route>
          ))}
        </React.Fragment>
      );

    });
  };
}

// Export a component for rendering the
// default app routes defined above
export function AppRoutes({ routes = [] }){
  return withRoutes(ROUTES).call(null, routes);
}
