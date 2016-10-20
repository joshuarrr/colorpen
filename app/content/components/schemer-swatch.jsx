/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

/* Colors */
export class SchemerSwatch extends Component {
	constructor(props) {
		super(props);
	}
	render = () => {
		return (
			<div
				className="schemer-swatch"
				style={{ backgroundColor: this.props.color }}
			/>
		);
	}
}
