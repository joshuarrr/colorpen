var React = require('react');
import VelocityTransitionGroup from 'VelocityTransitionGroup';
import 'velocity-animate/velocity.ui';
import store from '../store';
import styles from '../styles/style-guide.css';
var Colors = require('./style-guide/colors.jsx');
var Typography = require('./style-guide/typography.jsx');

// console.log(styles);
var DevMode = React.createClass({
  render() {
    return (
      <VelocityTransitionGroup
        enter="transition.fadeIn"
        enterOptions={{delay: 100}}
        leave="transition.fadeOut"
        defaults={{duration: 2000}}
      >
        {
        store.isDevMode &&
        <div key="dev" className={styles.devMode}>
          <p>THIS IS DEV MODE.</p>
        </div>
        }
      </VelocityTransitionGroup>
    );
  }
});

var StyleGuide = React.createClass({
  getInitialState: function() {
      return { on: false };
  },

  handleClick() {
      store.isDevMode = !store.isDevMode;
      this.setState({on: !this.state.on});
  },

  render: function () {
    var devClasses = this.state.on ? "is-active" : "";
    devClasses += " dev-mode-toggle-icon icon-gear";

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
        <div className='page style-guide'>
          <DevMode />
          <h1>Style Guide</h1>
          <button className="button dev-mode-toggle" onClick={this.handleClick}>
              <span className={devClasses} />
              <span className="dev-mode-toggle-text">Toggle Dev Mode</span>
          </button>
          <Colors />
          <Typography />
        </div>
      </VelocityTransitionGroup>
    );
  }
});

module.exports = StyleGuide;