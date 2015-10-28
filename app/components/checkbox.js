/* eslint react/prop-types: 0 */
let React = require('react');

/* Checkboxes */
let Checkbox = React.createClass({

  getInitialState() {
    // we ONLY set the initial state from the props
    return { checked: this.props.initialChecked };
  },

  handleChange() {
    let newState = !this.state.checked;
    this.setState({ checked: newState });
    this.props.callbackParent(newState); // hey parent, I"ve changed!
  },

  render() {
    let labelStyle = this.state.checked ? " checked" : "";

    return (
      <div className="checkbox">
        <label
          className={"checkbox-label " + labelStyle}
          id={this.props.id}
        >
          <input
            checked={this.props.initialChecked}
            id={this.props.id}
            onClick={this.handleChange}
            type="checkbox"
            className="checkbox-input"
          />
          <span className="checkbox-label-text">
            { this.props.text }
          </span>
        </label>
    </div>
    );
  }
});

export default Checkbox;
