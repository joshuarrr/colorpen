var React = require('react');
import { Link, RouteHandler } from 'react-router';

var Logo = React.createClass({
  handleClick() {
    store.isNavExpanded = false;
  },

 render() {
    return (
      <Link
        className='logo'
        to='home'
        tabIndex='-1'
        onClick={this.handleClick}
      >
        <h1 className='name'>Joshua Richey</h1>
      </Link>
    );
  }
});

export default Logo;