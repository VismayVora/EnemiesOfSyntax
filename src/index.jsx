import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './App';
import { GlobalProvider } from './context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
