/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import tinyColor from 'tinyColor2';
import { Color } from './color';
import { SketchPicker } from 'react-color';
import { ChromePicker } from 'react-color';
import store from '../../store';

/* Colors */
export class Schemer extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		store.currentColor = event.target.value;
	}

	// react-color colorpicker
	handleChangeComplete = (color) => {
		console.log('* color.hex = ' + tinyColor(color.hex).setAlpha() + '\n');
		store.currentColor = tinyColor(color.hex).toHslString();
	};

	// Random scheme generator
	randomScheme = () => {
		const randomColor =	tinyColor(tinyColor.random()).toHexString();
		// console.log('* randomColor = ' + randomColor + '\n');
		store.currentColor = randomColor;
	};

	renderScheme = (schemeType) => {
		// console.log('* schemetype = ' + schemeType + '\n');
		// console.log('* store[schemeType] = ' + store[schemeType] + '\n');
		const [firstColor, ...generatedColors] = store[schemeType];
		// console.log('* firstColor = ' + firstColor + '\n');
		const schemerSwatches = generatedColors.map(t =>
			<Color
				color={	t.toHslString() }
				id={ t.toHslString() }
				key={ 'color-' + t }
			/>
		);
		return (
			<div className="schemer-swatches">
				{ schemerSwatches }
			</div>
		);
	}

	render = () => {
		return (
			<section
				className={ 'schemer ' }
			>
				<h2 className="schemer-title">Color Schemer</h2>
				<div className="schemer_wrap">
					<div className="initial-color">

						<h3>current color: { store.currentColor }</h3>
						<Color
							color={	store.currentColor }
							id={ store.currentColor }
							key={ 'color-' + store.currentColor }
						/>
						<div className="complement">
							<h3>complement: { store.complement.toName() }</h3>
							<p className="hidden">Complementary colors are pairs of colors which, when combined, cancel each other out. This means that when combined, they produce a grey-scale color like white or black.[1] When placed next to each other, they create the strongest contrast for those particular two colors. Due to this striking color clash, the term opposite colors is often considered more appropriate than "complementary colors".</p>
							<div className="schemer-swatches">
								<Color
									color={	store.complement.toHexString() }
									id={ store.complement.toHexString() }
									key={ 'color-' + store.complement.toHexString() }
								/>
							</div>
						<ChromePicker
							color={ store.currentColor }
							onChangeComplete={ this.handleChangeComplete }
						/>
						<div className="random-scheme">
							<button
								className="random-scheme-generator"
								onClick={ this.randomScheme }
							>
								random
							</button>
						</div>
						</div>
					</div>
					<div className="schemes">
						<div className="analogous">
							<h2>analogous</h2>
							<p>Analogous colors are groups of three colors that are next to each other on the color wheel, with one being the dominant color, which tends to be a primary or secondary color, and a tertiary. Red, orange, and red-orange are examples.</p>
							{ this.renderScheme('analogous') }
						</div>
						<div className="mono">
							<h2>monochromatic</h2>
							<p>Monochromatic colors are all the colors (tints, tones, and shades) of a single hue. Example of a monochromatic color scheme. Monochromatic color schemes are derived from a single base hue and extended using its shades, tones and tints.</p>
							{ this.renderScheme('monochrome') }
						</div>
						<div className="split-comp">
							<h2>split-complementary</h2>
							<p>The split-complementary (also called Compound Harmony) color scheme is a variation of the complementary color scheme. In addition to the base color, it uses the two "Analogous" colors adjacent to its complement. Split-complementary color scheme has the same strong visual contrast as the complementary color scheme, but has less pressure.</p>
							{ this.renderScheme('splitcomplement') }
						</div>
						<div className="triad">
							<h2>triadic</h2>
							<p>The triadic color scheme uses three colors equally spaced around the color wheel. The easiest way to place them on the wheel is by using a triangle of equal sides. Triadic color schemes tend to be quite vibrant, even when using pale or unsaturated versions of hues, offers a higher degree of contrast while at the same time retains the color harmony. This scheme is very popular among artists because it offers strong visual contrast while retaining balance, and color richness. The triadic scheme is not as contrasting as the complementary scheme, but it is easier to accomplish balance and harmony with these colors.</p>
							{ this.renderScheme('triad') }
						</div>
						<div className="tetrad">
							<h2>tetradic</h2>
							<p>The tetradic (double complementary) colors scheme is the richest of all the schemes because it uses four colors arranged into two complementary color pairs. This scheme is hard to harmonize and requires a color to be dominant or subdue the colors.; if all four colors are used in equal amounts, the scheme may look unbalanced.</p>
							{ this.renderScheme('tetrad') }
						</div>
					</div>
				</div>
			</section>
		);
	}
}