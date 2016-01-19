import React, { Component } from 'react';
import { Color } from './color';
import SvgColors from '../../data/svg-colors';
import x11Colors from '../../data/x11-colors';
import cssColors from '../../data/css-colors';
import htmlColors from '../../data/html-colors';

export class ColorSets extends Component {
	static propTypes = {
		config: React.PropTypes.string
	}

	render() {
		console.log('colorsets config = ' + this.props.config);
		let config = this.props.config;

		if (config === 'SVG Colors') {
			config = SvgColors;
		} else if (config === 'X11 Colors') {
			config = x11Colors;
		} else if (config === 'CSS Colors') {
			config = cssColors;
		} else if (config === 'HTML Colors') {
			config = htmlColors;
		} else {
			config = SvgColors;
		}

		const colorset = config.map(function ex(group, i) {
			const colors = group.colors.map(function gc(color) {
				return (
					<Color
						color={ color.name }
						id={ color.name }
					/>
				);
			});

			return (
				<li
					className={ "color-category" } key={ 'cc-' + i }>
					<h2 className = "color-category-name">
						{ group.category }
					</h2>
					<ul className="colors">
						{ colors }
					</ul>
				</li>
			);
		});

		return (
			<div className="groups-wrap">
				{ colorset }
			</div>
		);
	}
}