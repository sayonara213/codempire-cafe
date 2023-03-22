import React from 'react';

import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Theme } from './theme';
import '../../App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <ToastContainer />
        <AppRouter />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
