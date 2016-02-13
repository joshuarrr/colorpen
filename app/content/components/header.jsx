import React, { Component } from 'react';
import _ from 'lodash';
import cs from 'classnames';
import DropdownList from 'react-widgets/lib/DropdownList';

const collections = [
	{
		name: 'SVG Colors',
		id: 'svgColors'
	},
	{
		name: 'X11 Colors',
		id: 'x11Colors'
	},
	{
		name: 'HTML Colors',
		id: 'htmlColors'
	},
	{
		name: 'CSS Colors',
		id: 'cssColors'
	}
];

export class Header extends Component {
	static propTypes = {
		callbackParent:	React.PropTypes.any
	}

	constructor(props) {
		super(props);
		const first = collections[0];

		this.state = {
			value: first.name
		};
	}

	componentDidUpdate = (prevProps, prevState) => {
		const newValue = this.state.value;
		console.log('header newValue = ' + this.state.value);

		return (
			this.props.callbackParent(newValue)
			);
	}

	render = () => {
		// const config = 'SVG Colors';
		console.log('Header state = ' + this.state.value);

		const colorSets = collections.map(function gc(collection) {
			return (
				collection.name
				);
		});

		return (
			<header className={ 'site-header' }>
				<h1 className="site-title">
					Colorpen
				</h1>
				<DropdownList
					data={ colorSets }
					value={ this.state.value }
					onChange={
						value => this.setState({ value })
					}
				/>
			</header>
			);
		}
	}
