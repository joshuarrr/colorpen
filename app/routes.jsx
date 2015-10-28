import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import App from './app.jsx';
import Home from './content/home.jsx';
import NotFound from './content/not_found.jsx';

render((
  <Router>
    <Route path="/" component={App}>
      {/* Show the dashboard at / */}
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.querySelector(".root"))