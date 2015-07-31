var React = require('react');
import { Link, RouteHandler } from 'react-router';
import store from './store';
import Header from './components/header.jsx';
var Waypoint = require('react-waypoint');

require('./styles/app.css');

// Main App //
var App = React.createClass({
  hideHeader: function() {
    // console.log('Hide the header');
    store.isNavShowing = false;
    store.register(() => this.forceUpdate());
  },

  showHeader: function() {
    if (store.isInifigramming) {
      // console.log('(4) Dont show the header.');
    } else {
      // console.log('(4) Show the header.');
      store.isNavShowing = true;
      store.register(() => this.forceUpdate());
    }
  },

  render() {
    var infinigramming = store.isInifigramming ? true : false;
    console.log('App infinigramming = ' + store.isInifigramming);
    return (
      <main role='main' id='app'>
        <Waypoint
          onEnter={this.showHeader}
          onLeave={this.hideHeader}
          threshold={0}
          class={'page-top'}
        />
        <Header class={'header'} infinigramming={infinigramming} />
        <RouteHandler />
        <Waypoint
          onEnter={this.showHeader}
          threshold={0}
          class={'page-bottom'}
        />
      </main>
    );
  }
});

export default App;