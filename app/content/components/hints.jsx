/* eslint react/prop-types: 0 */
let React = require('react');

let Hints = React.createClass({
  getInitialState() {
    return {
      showHints: false
    };
  },
  handleMouseEnter() {
    if (this.state.showHints === false) {
      this.setState({ showHints: true });
    }
  },
  handleClick() {
    let hints = !this.state.showHints;
    this.setState({ showHints: hints });
    return false;
  },
  render() {
    console.log("this.state.showHints = " + this.state.showHints);
    let showing = this.state.showHints ? " show-hints" : "";
    return (
      <span className="hint-container">
        <a
          className={"hint-link" + showing}
          href=""
          onMouseEnter={ this.handleMouseEnter }
          onClick={ this.handleClick }
        >
          <span>
            ?
          </span>
        </a>
        <ul className={"hints" + showing }>
          <li className="hint">
            Press f to enter fullscreen mode.
          </li>
          <li className="hint">
            Click a color name or code to copy it to your clipboard.
          </li>
        </ul>
      </span>
      );
  }
});

export default Hints;
