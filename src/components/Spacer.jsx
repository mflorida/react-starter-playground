import React from 'react';
import { resolveClasses } from '../lib/index.js';

/**
 * Returns a div that can be used to space items apart.
 * @param {Object} [props] Optional component props
 * @returns {JSX.Element}
 */
export function Spacer(props){

  const {
    as = 'div',
    width = 'auto',
    height = 'auto',
    className = '',
    style = {},
    children = <>&nbsp;</>,
    ..._props
  } = props;

  const classes = resolveClasses('spacer', className);

  const _style = {
    height,
    width,
    overflow: 'hidden',
    ...style
  };

  console.log('It\'s a spacer.');

  return React.createElement(as, {
    className: classes,
    style: _style,
    ..._props
  }, children);
}

export default Spacer;
