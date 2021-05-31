import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { intialState, reducer, StateProvider } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider intialStates={intialState} reducer={reducer}>
       <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);