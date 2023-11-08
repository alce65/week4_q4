import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context/app.provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);
