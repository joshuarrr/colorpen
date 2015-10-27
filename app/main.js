var React = require('react');
import Routes from './routes.jsx';
import {default as Router} from 'react-router';

Router.run(Routes, function(Root, state) {
  React.render(React.createElement(Root), document.getElementById('root'));
});