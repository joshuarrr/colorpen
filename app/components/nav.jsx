var React = require('react');
import { Link, RouteHandler } from 'react-router';
import navLinkList from '../data/nav_links.js';
import store from '../store';


// Blurred Background //
var BlurredBackground = React.createClass({
  getInitialState: function() {
    return {
      scrollPos: window.scrollY,
      mounted: false
    };
  },

  handleKeyup: function(e) {
    if (e.keyCode == 27) {
        store.isNavExpanded = !store.isNavExpanded;
    }
  },

  handleScroll: function(e) {
    this.setState({ scrollPos: window.scrollY });

    if (store.isNavExpanded) {
      var dupeContainer = document.querySelector('.blurred-container');
      dupeContainer.scrollTop = this.state.scrollPos
    };
  },

  componentDidMount: function() {
    this.setState({ mounted: true });

    // listen for escape key
    window.addEventListener('keyup', this.handleKeyup);

    // listen for scroll
    window.addEventListener('scroll', this.handleScroll);

    // Create a duplicate of the page and shove it in the blurred container.
    var content = document.querySelector('.page');
    var duplicate = content.cloneNode(true);
    var dupeContainer = document.querySelector('.blurred-container');
    // Add the duplicate content
    dupeContainer.appendChild(duplicate);

    // position it according to current scroll (since it's fixed)
    // var yPos = window.scrollY;
    dupeContainer.scrollTop = this.state.scrollPos;
  },

  componentDidUpdate() {
    var dupeContainer = document.querySelector('.blurred-container');
    dupeContainer.scrollTop = this.state.scrollPos;
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
    window.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    var navState = this.state.mounted ? ' nav-is-expanded' : '';
    return (
      <div className={'blurred-container' + navState} />
    );
  }
});


// Nav Links //
var NavLinks = React.createClass({
  handleClick() {
    store.isNavExpanded = false;
  },

  render: function() {
  var self = this;
    // console.log('mobile = ' + store.isMobile);
    var links = navLinkList.map(function (l) {
      return (
        <li className="nav-item" key={l.to}>
          <Link
            className="nav-link"
            onClick={self.handleClick}
            to={l.to}
            tabIndex="3"
          >
            {l.title}
          </Link>
        </li>
      )
    });
    return (
      <ul key='navLinks' className='nav-links'>
        { links }
      </ul>
    );
  }
});


// Primary Nav //
var Nav = React.createClass({
  handleKeyup: function(e) {
    if (!store.isColophonShowing) {
      if (e.keyCode == 27) {
        store.isNavExpanded = !store.isNavExpanded;
      }
    }
  },
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
  },

  render() {
    var isGramming = store.isInfinigramming ? " is-gramming" : "";
    var mqclass = this.props.mq;
    var isExpanded = store.isNavExpanded ? ' nav-is-expanded' : '';

    return (
      <span className={'nav-wrapper' + isExpanded}>
        <nav className={'nav ' + mqclass + isGramming + isExpanded}>
          <NavLinks />
        </nav>
        {
          store.isNavExpanded &&
          <BlurredBackground />
        }
      </span>
    )
  }
});


module.exports = Nav;