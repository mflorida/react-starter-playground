import React, { useContext, useState } from 'react';
import { CounterContext } from './CounterContext.jsx';
import CounterButton from './CounterButton.jsx';

const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const EQUALS = '=';

export function CounterForm(){

  const { setCounterValue } = useContext(CounterContext);
  const [updateType, setUpdateType] = useState(EQUALS);
  const [customValue, setCustomValue] = useState(0);

  const buttonStyle = {
    padding: '6px 12px'
  };

  const MATHS = {
    [ADD]: (val) => setCounterValue(prev => prev + val),
    [SUBTRACT]: (val) => setCounterValue(prev => prev - val),
    [MULTIPLY]: (val) => setCounterValue(prev => prev * val),
    [DIVIDE]: (val) => setCounterValue(prev => prev / val),
    [EQUALS]: (val) => setCounterValue(val),
    _____: null
  }

  const UpdateTypeRadio = ({ title, maths }) => {

    const isChecked = updateType === maths;

    const classes = [
      'font-mono button',
      isChecked ? 'active' : ''
    ].join(' ').trim();

    return (
      <label title={title} className={classes}>
        <input
          style={{ display: 'none' }}
          name={'updateType'}
          type={'radio'}
          value={maths}
          onChange={(e) => {
            setUpdateType(e.target.value)
          }}
          checked={isChecked}
        />
        {maths}
      </label>
    )
  };

  return (
    <form className={'flex items-center justify-between'} onSubmit={(e) => {
      e.preventDefault();
      MATHS[updateType](customValue);
    }}>
      <div className={'button-group'}>
        <CounterButton style={buttonStyle} amount={-1}>- 1</CounterButton>
        <CounterButton style={buttonStyle} amount={+1}>+ 1</CounterButton>
        <CounterButton style={buttonStyle} amount={-5}>- 5</CounterButton>
        <CounterButton style={buttonStyle} amount={+5}>+ 5</CounterButton>
      </div>

      <div>
        <span className={'button-group'}>
          <UpdateTypeRadio title={'Add'} maths={ADD} />
          <UpdateTypeRadio title={'Subtract'} maths={SUBTRACT} />
          <UpdateTypeRadio title={'Multiply'} maths={MULTIPLY} />
          <UpdateTypeRadio title={'Divide'} maths={DIVIDE} />
          <UpdateTypeRadio title={'Exact Value'} maths={EQUALS} />
          <label>
            <input
              className={'font-mono'}
              style={{ width: '6em', height: '100%', padding: '0 8px' }}
              type={'text'}
              value={customValue}
              onChange={(e) => {
                const value = e.target.value;
                if (/[0-9]/.test(value)) {
                  setCustomValue(Number(value))
                }
              }}
            />
          </label>
        </span>
        <>&nbsp;</>
        <button className={'button'} type={'submit'}>Update</button>
      </div>

      <div>
        <button className={'button'} type={'button'} onClick={() => {
          setCounterValue(0);
          setCustomValue(0);
          setUpdateType(EQUALS);
        }}>
          Reset
        </button>
      </div>

    </form>
  );
}

export default CounterForm;
