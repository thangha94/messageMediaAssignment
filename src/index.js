/** @jsxRuntime classic */
import "react-app-polyfill/ie11";
import 'intersection-observer';
import React from 'react'
import ReactDOM from 'react-dom';
import axios from "axios";

import App from './components/App/App';
import './styles/main.scss';
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
