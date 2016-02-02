import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Colors } from './components/colors';
import { Header } from './components/header';
require('../styles/app.css');

export class Home extends Component {
	mixins: [ PureRenderMixin ]

	constructor(props) {
		super(props);

		this.state = {
			config: 'SVG Colors'
		};
	}

	config = (newValue) => {
		const config = newValue;
		console.log('App Newvalue= ' + newValue);
		if (this.state.config !== newValue) {
			this.setState({ config: newValue });
		}
	}

	render = () => {
		return (
			<div className="Home">
				<Header callbackParent={ this.config } />
				<Colors config={ this.state.config } />
			</div>
		);
	}
}
