import React from 'react';

import AppRouter from '../AppRouter';
import { BrowserRouter } from 'react-router-dom';

import { Theme } from './theme';
import '../../App.css';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
