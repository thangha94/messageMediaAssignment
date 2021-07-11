/** @jsxRuntime classic */
import "react-app-polyfill/ie11";
import 'intersection-observer';
import React from 'react'
import ReactDOM from 'react-dom';

import App from './App';
import './styles/main.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
