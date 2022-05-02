import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import 'react-multi-carousel/lib/styles.css';
import { BrowserRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
