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

	render = () => {
		// console.log('colorsets config = ' + this.props.config);
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
			const colors = group.colors.map(function gc(color, ii) {
				return (
					<Color
						color={ color.name }
						id={ color.name }
						key={ 'color-' + ii }
					/>
				);
			}, this);

			return (
				<li
					className={ "color-category" }
					key={ 'category-' + i }
				>
					<h2
						className = "color-category-name"
						key={ 'color-category-name-' + i }
					>
						{ group.category }
					</h2>
					<ul className="categorized-colors">
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
