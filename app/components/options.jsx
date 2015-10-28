/* eslint react/prop-types: 0 */
let React = require('react');
import Checkbox from "components/checkbox";

let Options = React.createClass({
export default Options;
  getInitialState() {
    return {
      namesChecked: true,
      hexChecked: false,
    };
  },

  onNameChanged(newState) {
    this.setState({ namesChecked: newState });
    this.props.callbackParent(newState);
  },

  onHexChanged(newState) {
    this.setState({ hexChecked: newState });
  },

  render() {

    return (
      <div className="display-options">
        {
          <span className="options">
            <Checkbox
              key="toggle-names"
              text="Color names"
              id="color-names"
              initialChecked={this.state.namesChecked}
              callbackParent={this.onNameChanged}
            />
            <Checkbox
              key="toggle-hex"
              text="Hex codes"
              id="hex-codes"
              initialChecked={this.state.hexChecked}
              callbackParent={this.onHexChanged}
            />
          </span>
        }
      </div>
    );
  }
});



