import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {' '}
    <Provider store={store}>
      {' '}
      <App />
    </Provider>
  </BrowserRouter>
);
