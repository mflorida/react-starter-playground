/**
 * Main view (page) for Counter example
 */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoundedPanel } from '../../components/index.js';
import CounterForm from './CounterForm.jsx';
import CounterOutput from './CounterOutput.jsx';

export function CounterView({ setCount }){

  const params = useParams();
  console.log('CounterView.params', params);

  const font = { size: 16 };

  return (
    <RoundedPanel id={'counter-view'}>

      <div className={'m-b-8'}>
        <CounterForm/>
      </div>

      <hr/>

      <div className={'m-t-8'}>

        <p className={'m-t-0 m-b-8'} style={{ fontSize: font.size }}>
          <b>Total:<>&nbsp;&nbsp;&nbsp;</><CounterOutput/></b>
        </p>

        <div className={'counter-total flex items-center justify-between'} style={{ padding: '0 2px' }}>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: --font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
          <CounterOutput style={{ fontSize: ++font.size }}/>
        </div>

      </div>
    </RoundedPanel>
  );

}

export default CounterView;
