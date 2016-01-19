import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import { Colors } from './components/colors';
import Helmet from 'react-helmet';
import PureRenderMixin from 'react-addons-pure-render-mixin';
require('../styles/app.css');

export class Home extends Component {
	mixins: [ PureRenderMixin ]

	render() {
		const config = 'SVG Colors';
		return (
			<PageWrapper>
				<Helmet title="" />
				<p>Coming Soon.</p>
				<div className="Home">
					<Colors config={ config } />
				</div>
			</PageWrapper>
		);
	}
}
