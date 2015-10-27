var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';

var NotFound = React.createClass({
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
        <div className="not-found page text-measure intro">
          <h1>lost</h1>
          <section key="not-found">
            <p>Sorry, there’s nothing here to be found.</p>
          </section>
        </div>
      </VelocityTransitionGroup>
    );
  }
});

export default NotFound;