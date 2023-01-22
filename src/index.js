import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './rtk/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
        <App />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
);


