import React from 'react';
import ReactDOM from 'react-dom';
import {transitions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const alertOptions = {
  offset: '30px',
  transition: transitions.SCALE,
  timeout: 5000
};


ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
