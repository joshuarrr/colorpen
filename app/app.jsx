let React = require('react');
import { Router, Route, Link } from 'react-router'
import Header from "./components/Header.js";
import Home from "./content/home.jsx";
import store from './store';
require("./styles/app.css");

let Application = React.createClass({
  getInitialState() {
    return {
      config: "SVG Colors"
    };
  },

  config(newValue) {
    let config = newValue;
    console.log("App = " + newValue);
    this.setState({ config: newValue });
  },

  render() {
    return (
      <div className="page-wrapper">
        <Header
          callbackParent={this.config}
        />
        <main>
          <Home
            config={this.state.config}
          />
        </main>
      </div>
    );
  },
});

export default Application;