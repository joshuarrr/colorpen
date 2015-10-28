/* eslint react/prop-types: 0 */
let React = require('react');
import { Router, Route, Link } from 'react-router'
import Colors from "../components/colors.js";
import FullScerenable from "../components/fullScreen.jsx";
let PureRenderMixin = require('react-addons-pure-render-mixin');

let Home = React.createClass({
  mixins: [ PureRenderMixin ],

  render() {
    let config = this.props.config;
    return (
      <div className="Home">
        <FullScerenable />
        <Colors config={ config } />
      </div>
    );
  }
});

export default Home;
