import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import './config/reactotron';

import store from './store';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Routes />
      <ToastContainer autoClose={5000} />
    </Provider>
  </>
);

export default App;
