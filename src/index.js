import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './contexts/user.context'; // Update this line

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App tab="root" />
      </UserProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
