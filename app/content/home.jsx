import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
require('../styles/app.css');

export class Home extends Component {
	render() {
		return (
			<PageWrapper>
				<Helmet title="" />
				<p>Coming Soon.</p>
			</PageWrapper>
		);
	}
}