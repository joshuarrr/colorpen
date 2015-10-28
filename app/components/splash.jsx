/* eslint react/prop-types: 0 */
let React = require('react');

let Splash = React.createClass({
  render() {
    console.log("this.props.animate = " + this.props.animate);
    return (
      <div className="splash" />
    );
  }
});

export default Splash;
