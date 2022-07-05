import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ShCartProvider } from './Context';
import { LoginProvider } from './Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShCartProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ShCartProvider>
  </React.StrictMode>
);
reportWebVitals();
