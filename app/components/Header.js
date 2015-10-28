/* eslint react/prop-types: 0 */
let React = require('react');
let PureRenderMixin = require('react-addons-pure-render-mixin');
import _ from "lodash";
import cs from "classnames";
import DropdownList from "react-widgets/lib/DropdownList";
import Hints from "./Hints";

let collections = [
  {
    name: "SVG Colors",
    id: "svgColors",
  },
  {
    name: "X11 Colors",
    id: "x11Colors",
  },
  {
    name: "HTML Colors",
    id: "htmlColors",
  },
  {
    name: "CSS Colors",
    id: "cssColors",
  }
];

let Header = React.createClass({

  getInitialState() {
    let first = collections[0];

    return {
      value: first.name
    };
  },

  componentDidUpdate(prevProps, prevState) {
    let newValue = this.state.value;

    return (
      this.props.callbackParent(newValue)
    );
  },

  render() {
    let colorSets = collections.map(function gc(collection) {
      return (
        collection.name
      );
    });

    return (
      <header className="site-header">
        <h1 className="site-title">
            Color Names
        </h1>
        <Hints />
        <div className="collection-selection">
          <DropdownList
            data={ colorSets }
            value={this.state.value}
            onChange={value => this.setState({ value })}
          />
        </div>
      </header>
    );
  }
});

export default Header;
