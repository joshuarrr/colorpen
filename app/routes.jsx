var React = require('react');
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './app.jsx';
import Home from './content/home.jsx';
import Art from './content/art.jsx';
import Design from './content/design.jsx';
import Photography from './content/photography.jsx';
import ProjectPage from './content/projects.jsx';
import ColorNamesPage from './content/projects/colornames/colors.jsx';
import StyleGuide from './content/style-guide.jsx';
import Words from './content/words.jsx';
import NotFound from './content/not_found.jsx';

var Routes = (
  <Route name="App" handler={App} path="/">
  <Route name="art" handler={Art} />
  <Route name="design" handler={Design} />
  <Route name="guide" handler={StyleGuide} />
  <Route name="photography" handler={Photography} />
  <Route name="projects" handler={ProjectPage} />
  <Route name="ColorNamesPage" handler={ColorNamesPage} />
  <Route name="words" handler={Words} />
  <DefaultRoute name="home" handler={Home} />
  <NotFoundRoute handler={NotFound} />
  </Route>
);

export default Routes;