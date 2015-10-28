/* eslint react/prop-types: 0 */
let React = require('react');
import Checkbox from "./checkbox";
import ColorSets from "./colorSets";

/* Colors */
let Colors = React.createClass({

  propTypes() {
    config: React.PropTypes.array;
  },

  getInitialState() {
    return {
      namesChecked: true,
      hexChecked: false,
      hslChecked: false,
      hsvChecked: false,
    };
  },

  onNameChanged(newState) {
    this.setState({ namesChecked: newState });
  },

  onHexChanged(newState) {
    this.setState({ hexChecked: newState });
  },

  onHslChanged(newState) {
    this.setState({ hslChecked: newState });
  },

  onHsvChanged(newState) {
    this.setState({ hsvChecked: newState });
  },

  render() {
    let showNames = this.state.namesChecked ? "show-names " : "";
    let showHex = this.state.hexChecked ? "show-hex " : "";
    let showHsl = this.state.hslChecked ? "show-hsl " : "";
    let showHsv = this.state.hsvChecked ? "show-hsv " : "";

    let config = this.props.config;
    console.log("colors config = " + config);

    return (
      <section>
          <header className="section-header">
            <h1 className="section-title">{ config }</h1>
            <div className="display-options">
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
              <Checkbox
                key="toggle-hsl"
                text="HSL"
                id="hsl"
                initialChecked={this.state.hslChecked}
                callbackParent={this.onHslChanged}
              />
              <Checkbox
                key="toggle-hsv"
                text="HSV"
                id="hsv"
                initialChecked={this.state.hsvChecked}
                callbackParent={this.onHsvChanged}
              />
            </div>
          </header>
        <ul
          className={"colors " + showNames + showHex + showHsl + showHsv}
        >
          <ColorSets config={config} />
        </ul>
      </section>
    );
  }
});


export default Colors;
