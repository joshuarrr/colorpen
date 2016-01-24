import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Colors } from './components/colors';
import { Header } from './components/header';
require('../styles/app.css');

export class Home extends Component {
	mixins: [ PureRenderMixin ]

	render() {
		const config = 'SVG Colors';
		return (
			<div className="Home">
				<Header />
				<Colors config={ config } />
			</div>
		);
	}
}
