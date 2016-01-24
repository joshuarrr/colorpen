import React, { Component } from 'react';
import Helmet from 'react-helmet';
require('../../styles/components/page-wrapper.css');

export class PageWrapper extends Component {
	static propTypes = {
		children: React.PropTypes.node
	}
	render = () => {
		return (
			<div className="page-wrapper">
				<Helmet titleTemplate="%s | Colorpen" />
				<h1 className="site-logo">Colorpen</h1>
				{ this.props.children }
			</div>
		);
	}
}
