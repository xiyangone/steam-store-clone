/* v8 ignore file */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { injectSteamHomeDocumentStyles } from './features/steam-home/assets';
import './styles/global.css';
import './features/steam-home/steam-home.css';

injectSteamHomeDocumentStyles();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
