import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export class About extends Component {
	render() {
		return (
			<div>
				<Helmet title={ "About" } />
				<h1>About</h1>
				<p>This page excludes the pagewrapper component.</p>
				<Link to="/home">Home</Link>
			</div>
		);
	}
}
