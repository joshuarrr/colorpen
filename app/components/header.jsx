var React = require('react');
import Nav from './nav.jsx';
import Logo from './logo.jsx';
import store from '../store';

var NavToggle = React.createClass({
  toggleNav() {
    store.isNavShowing = !store.isNavShowing;
    console.log('After toggle, isNavShowing = ' + store.isNavShowing);
  },

  render: function() {
    var navClasses = store.isNavShowing ? "is-active" : "";
    navClasses += ' nav-toggle';
    return (
      <button className={navClasses} onClick={this.toggleNav}>
        <span className='inner'>toggle menu</span>
      </button>
    );
  }
});

var Header = React.createClass({

  render: function() {
    var classes = store.isNavShowing ? ' open' : ' closed';
    return (
      <span>
        <header className={ this.props.class + classes}>
          <Nav />
          <Logo squished={ store.isSquished } />
        </header>
        <NavToggle />
      </span>
    );
  }
});

export default Header;