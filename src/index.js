import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App authService={authService} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

