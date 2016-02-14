import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
import { Colors } from './components/colors';
import { Header } from './components/header';
require('../styles/app.css');

export class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			config: 'SVG Colors',
			options: false
		};
	}

	config = (newValue) => {
		const config = newValue;
		// console.log('App Newvalue= ' + newValue);
		if (this.state.config !== newValue) {
			this.setState({ config: newValue });
		}
	}

	changeHandler = (options) => {
		this.setState({
			options: options
		});
	}

	render = () => {
		/* */
		console.log(
			'\n'
			+ '— home.jsx (render)'
			+ '\n * '
			+ 'state.options: '
			+ this.state.options + '\n\n'
		);
		/* */
		return (
			<div className="Home">
				<Header
					callbackParent={ this.config }
					options={ this.state.options }
					onChange={ this.changeHandler }
				/>
				<Colors
					config={ this.state.config }
					options={ this.state.options }
				/>
			</div>
		);
	}
}
