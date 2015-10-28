/* eslint react/prop-types: 0 */
let React = require('react');

let FullScreenable = React.createClass({
  getInitialState() {
    return {
      isFS: false
    };
  },

  toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },

  handleKeyup(e) {
    // listen for f key
    if (e.keyCode === 70) {
      // this.state.isFS = !this.state.isFS;
      // console.log("this.state.isFS = " + this.state.isFS);
      this.toggleFullScreen();
    }
  },

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyup);
  },

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyup);
  },

  render() {
    return (
      <div className="full-screen" />
      );
  }
});

export default FullScreenable;
