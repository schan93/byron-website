import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToTop from './js/ScrollToTop';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('app')
);

