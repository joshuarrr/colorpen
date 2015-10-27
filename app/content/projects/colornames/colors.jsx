var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import styles from './colornames.css';

var ColorNamesPage = React.createClass({
  render: function() {
    return (
      <VelocityTransitionGroup
        appear="transition.fadeIn"
        enter="transition.fadeIn"
        leave="transition.fadeOut"
        defaults={{
          duration: 2000,
          delay: 0
        }}
      >
        <div className="page colornames" key='projects-page'>
          <div className="text-measure" key='intro'>
            <h1 className="intro">color names</h1>
          </div>
        </div>
      </VelocityTransitionGroup>
    );
  }
});


module.exports = ColorNamesPage;