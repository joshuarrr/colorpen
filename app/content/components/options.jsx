/* eslint react/prop-types: 0 */
let React = require('react');
import Checkbox from "components/checkbox";
import DropdownList from 'react-widgets/lib/DropdownList';

export class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {
      namesChecked: true,
      hexChecked: false,
    };
  }

  onNameChanged = (newState) => {
    this.setState({ namesChecked: newState });
    this.props.callbackParent(newState);
  },

  onHexChanged = (newState) => {
    this.setState({ hexChecked: newState });
  },

  render = () => {
    const colorSets = collections.map(function gc(collection) {
      return (
        collection.name
      );
    }, this);

    return (
      <div className="display-options fucker">
        <DropdownList
          data={ colorSets }
          value={ this.state.value }
          onChange={
            value => this.setState({ value })
          }
        />
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
