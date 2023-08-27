import React from 'react';

/**
 * Returns rounded 'panel' component
 * @param {Object} [props] Optional props object
 * @returns {JSX.Element}
 */
export function RoundedPanel(props){

  const {
    children = null,
    className = '',
    ..._props
  } = props;

  const classes = [
    'rounded-panel',
    className
  ].join(' ').trim();

  return (
    <div className={classes} {..._props}>
      {children}
    </div>
  );
}

export default RoundedPanel;
