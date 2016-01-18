import React, { Component } from 'react';
import { PageWrapper } from './components/page-wrapper';
import Helmet from 'react-helmet';
require('../styles/app.css');

export class Info extends Component {
	render() {
		return (
			<PageWrapper>
				<Helmet title="Info" />
				<h1>Info</h1>
				<p>This is the info page.</p>
			</PageWrapper>
		);
	}
}
