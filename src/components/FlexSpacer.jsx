import React from 'react';
import { resolveClasses } from '../lib/index.js';

/**
 * Returns a div that can be inserted between
 * flexbox elements to push them apart.
 * @param {Object} [props] Optional component props
 * @returns {JSX.Element}
 */
export function FlexSpacer(props){

  const {
    as = 'div',
    width = 'auto',
    height = 'auto',
    className = '',
    style = {},
    children = <>&nbsp;</>,
    ..._props
  } = props;

  const classes = resolveClasses('flex-spacer', className);

  const _style = {
    width,
    height,
    flex: '1 1 0%',
    ...style
  }

  console.log('It\'s a flex spacer.');

  return React.createElement(as, {
    className: classes,
    style: _style,
    ..._props
  }, children);

}

export default FlexSpacer;
