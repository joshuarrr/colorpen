var React = require('react');
import { Link, RouteHandler } from 'react-router';
import VelocityTransitionGroup from 'VelocityTransitionGroup';

var ProjectsPage = React.createClass({
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
        <div className="page projects" key='projects-page'>
          <div className="text-measure" key='intro'>
            <div className='projects'>
              <h1 className="intro">projects</h1>
              <ul>
                <li className="project-title">
                  <Link
                    className="link"
                    to="ColorNamesPage">
                      HTML / CSS Color Names
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </VelocityTransitionGroup>
    );
  }
});


module.exports = ProjectsPage;