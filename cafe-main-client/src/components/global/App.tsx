import React from 'react';

import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from './theme';
import '../../App.css';

const App = () => {
  return (
    <Theme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
