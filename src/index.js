import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Router>
      <App tab="root" />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
