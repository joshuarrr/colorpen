var React = require('react');
var MediaQuery = require('react-responsive');
var Waypoint = require('react-waypoint');
import Header from './components/header.jsx';
import { Link, RouteHandler } from 'react-router';
import store from './store';
require('./styles/app.css');
require('file?name=favicon.png!./favicon.png');


// Pages //
var Main = React.createClass({
  render: function() {
    return (
      <RouteHandler />
    );
  }
});


// Colophon //
var Colophon = React.createClass({
  handleKeyup: function(e) {
    if (!store.isNavExpanded && store.isColophonShowing) {
      if (e.keyCode == 27) {
        store.isColophonShowing = !store.isColophonShowing;
      }
    }
  },

  handleClick() {
    store.isColophonShowing = !store.isColophonShowing;
    window.addEventListener('keyup', this.handleKeyup);
  },

  componentWillUnmount: function() {
    window.removeEventListener('keyup', this.handleKeyup);
  },

  render: function() {
    var colophonStyles = store.isColophonShowing ? ' expanded' : '';

    return (
      <div className={'colophon'  + colophonStyles}>
        <div className='colophon-toggle'>
            <div className='front face'>
                <button onClick={this.handleClick}>
                  ?
                </button>
            </div>
            <div className="back face">
                <button onClick={this.handleClick}>
                  ×
                </button>
            </div>
        </div>
        <div className='colophon-content text-measure'>
          <p>
            This site was built with <a href="http://facebook.github.io/react/" target="_blank">React</a> & <a href="https://webpack.github.io/" target="_blank">Webpack</a>. It makes use of <a href="https://github.com/postcss" target="_blank">PostCSS</a> and numerous <a href="http://postcss.parts/" target="_blank">plugins</a>.
          </p>
          <p>
            The primary typeface is Egenolff-Berner Garamond, crafted for the web by <a href="http://www.georgduffner.at/ebgaramond/" target="_blank">Georg Duffner</a>. The sans-serif and monospace faces are <a href="http://mozilla.github.io/Fira/" target="_blank">Fira Sans</a> and <a href="http://mozilla.github.io/Fira/" target="_blank">Fira Mono</a> by Mozilla. These fonts are served unmodified from their originals by <a href="http://brick.im/" target="_blank">Brick</a>, which I highly recommend.
          </p>
          <p>
            Thanks to all the developers contributing to the open source software that make developing for the modern web such a pleasure. (No, that was not facetious.)
          </p>
        </div>
      </div>
    );
  }
});


// Main App //
var App = React.createClass({
  componentDidMount: function() {
    store.register(() => this.forceUpdate());
  },

  toggleHeader() {
    store.isNavShowing = !store.isNavShowing;
  },

  toggleNav() {
    store.isNavExpanded = !store.isNavExpanded;
  },

  render() {
    var isExpanded = store.isNavExpanded ? ' nav-is-expanded' : ' nav-not-expanded';
    var isHeaderShowing = store.isNavShowing ? ' show-header' : ' hide-header'
    var colophonIsShowing = store.isColophonShowing ? ' show-colophon' : '';

    return (
      <MediaQuery
        key={'mq'}
        className={'main' + isExpanded + colophonIsShowing }
        component='main'
        screen={true} >
        <MediaQuery
          component='span'
          className='mq-wrap'
          key={'mq-mobile'}
          maxWidth={768} and maxDeviceWidth={768} >
          <Header class='header mobile' mq='mobile' />
          <Main mq='mobile' />
        </MediaQuery>
        <MediaQuery
          component='span'
          className='mq-wrap'
          key={'mq-desktop'}
          minDeviceWidth={ 769 } >
          <div className={ 'header-wrap' + isHeaderShowing } >
            <Header class='header desktop' mq='desktop' />
          </div>
          <div
            className='header-toggle'
            onMouseEnter={ this.toggleHeader }
            onMouseLeave={ this.toggleHeader }
            onClick={ this.toggleNav } />
          <Main mq='desktop' />
        </MediaQuery>
        <Colophon />
      </MediaQuery>
    );
  }
});


export default App;