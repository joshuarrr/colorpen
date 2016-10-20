/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import tinyColor from 'tinyColor2';
import store from '../../store';

/* Color */
export class Color extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			clicked: false
		};
	}

	setValue = (type) => {
		this.setState({ value: type });
	}

	handleClick = () => {
		const copyTextarea = ReactDOM.findDOMNode(this.refs.colorText);
		copyTextarea.select();

		const isClicked = true;
		this.setState({ clicked: isClicked });
		// console.log('clicked ' + this.state.clicked);

		// send the clicked color to the store
		// console.log('* currentColor = ' + this.state.value + '\n');
		store.currentColor = this.state.value;

		console.log('* store currentColor = ' + store.currentColor + '\n');


		try {
			const successful = document.execCommand('copy');
			const msg = successful ? this.state.value : 'unsuccessful';
			console.log('Copied ' + msg);
		} catch (err) {
			console.log('Unable to copy.');
		}
	}

	handleMouseLeave = () => {
		const isClicked = false;
		this.setState({ clicked: isClicked });
	}

	render = () => {
		const clickedClass = this.state.clicked ? ' clicked' : '';
		const value = this.state.value;
		const swatchColor = {
			backgroundColor: this.props.color
		};
		const isClicked = this.state.clicked ? true : false;
		const copyColor = this.props.color;
		const copyHex =	tinyColor(copyColor).toHexString();
		const copyHsl =	tinyColor(copyColor).toHslString();
		const copyHsv =	tinyColor(copyColor).toHsvString();
		const readable = tinyColor.isReadable(copyColor);
		const copyIcon = `
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 45.9' enable-background='new 0 0 36 45.9'>
			<path class='path' fill='white' d='M17 0c1.7 0 3 1.3 3 3h1c1.3 0 2 1 2 1l2 2c.9.9 2 1 2 1 .6 0 1 .4 1 1s-.4 1-1 1h-20c-.6 0-1-.4-1-1s.4-1 1-1c0 0 1.1-.1 2-1l2-2s.8-1 2-1h1c0-1.7 1.3-3 3-3'/>
			<path class='path' fill='white' d='M17 2c-.6 0-1 .4-1 1h2c0-.6-.4-1-1-1zM34 7c0-2.2-1.8-4-4-4h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.1 0 2 .9 2 2v16h2v-16zM32 42c0 1.1-.9 2-2 2h-26c-1.1 0-2-.9-2-2v-35c0-1.1.9-2 2-2h3c.6 0 1-.4 1-1s-.4-1-1-1h-3c-2.2 0-4 1.8-4 4v35c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4v-13h-2v13zM34.9 25h-16l4.7-4.7c.4-.4.4-1.2 0-1.6-.5-.5-1.2-.4-1.6 0l-6.5 6.5c-.2.2-.2.4-.3.6 0 .1-.1.2-.1.2 0 .1 0 .3.1.4.1.1.1.3.3.4l6.4 6.4c.2.2.5.3.8.3s.6-.1.8-.3c.4-.4.4-1.2 0-1.6l-4.6-4.6h16.1c.6 0 1.1-.4 1.1-1-.1-.6-.6-1-1.2-1z'/>
			</svg>
	 `;
		const copiedIcon = `
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 46' enable-background='new 0 0 34 46'>
				<style type='text/css'>.st0{ fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10; }</style>
				<path class='path' fill='white' d='M30 46h-26c-2.2 0-4-1.8-4-4v-35c0-2.2 1.8-4 4-4h3c.6 0 1 .4 1 1s-.4 1-1 1h-3c-1.1 0-2 .9-2 2v35c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2v-35c0-1.1-.9-2-2-2h-3c-.6 0-1-.4-1-1s.4-1 1-1h3c2.2 0 4 1.8 4 4v35c0 2.2-1.8 4-4 4zM17 0c1.7 0 3 1.3 3 3h1c1.3 0 2 1 2 1l2 2c.9.9 2 1 2 1 .6 0 1 .4 1 1s-.4 1-1 1h-20c-.6 0-1-.4-1-1s.4-1 1-1c0 0 1.1-.1 2-1l2-2s.8-1 2-1h1c0-1.7 1.3-3 3-3'/>
				<path class='path' fill='white' d='M17 2c-.6 0-1 .4-1 1h2c0-.6-.4-1-1-1z'/>
				<path class='path st0' stroke='white' d='M9.2 27.2l6.3 5 10.3-15.1'/>
			</svg>
		`;
		const styles = readable ? { color: 'DarkSlateGray' } : { color: 'white' };
		const light = readable ? 'light' : '';
		return (
			<li
				className={ 'color color-swatch color-' + this.props.id + clickedClass }
				style={ swatchColor }
			>
				<h2 className={ 'color-swatch-link-title color-name' }>
					<a
						style={ styles }
						className={ 'swatch-link' + clickedClass }
						onMouseEnter={ evt => this.setValue(copyColor) }
						onMouseLeave={ this.handleMouseLeave }
						onClick={ this.handleClick }
					>
						{
							isClicked ||
							<div

								className={ 'copy-icon ' + light }
								dangerouslySetInnerHTML={ { __html: copyIcon } }
							/>
						}
						{
							isClicked &&
							<div
								className={ 'copy-icon copied ' + light }
								dangerouslySetInnerHTML={ { __html: copiedIcon } }
							/>
						}
						<span className={ 'swatch-text' }>
							{ copyColor }
						</span>
					</a>
				</h2>

				<h2 className={ 'color-swatch-link-title hex-code' }>
					<a
						style={ styles }
						className={ 'swatch-link' + clickedClass }
						onMouseEnter={ evt => this.setValue(copyHex) }
						onMouseLeave={ this.handleMouseLeave }
						onClick={ this.handleClick }
					>
						{
							isClicked ||
							<div
								className={ 'copy-icon ' + light }
								dangerouslySetInnerHTML={ { __html: copyIcon } }
							/>
						}
						{
							isClicked &&
							<div
								className={ 'copy-icon copied ' + light }
								dangerouslySetInnerHTML={ { __html: copiedIcon } }
							/>
						}
						<span className={ 'swatch-text' }>
							{ copyHex }
						</span>
					</a>
				</h2>

				<h2 className={ 'color-swatch-link-title hsl-code' }>
					<a
						style={ styles }
						className={ 'swatch-link' + clickedClass }
						onMouseEnter={ evt => this.setValue(copyHsl) }
						onMouseLeave={ this.handleMouseLeave }
						onClick={ this.handleClick }
					>
						{
							isClicked ||
							<div
								className={ 'copy-icon ' + light }
								dangerouslySetInnerHTML={ { __html: copyIcon } }
							/>
						}
						{
							isClicked &&
							<div
								className={ 'copy-icon copied ' + light }
								dangerouslySetInnerHTML={ { __html: copiedIcon } }
							/>
						}
						<span className={ 'swatch-text' }>
							{ copyHsl }
						</span>
					</a>
				</h2>

				<h2 className={ 'color-swatch-link-title hsv-code' }>
					<a
						style={ styles }
						className={ 'swatch-link' + clickedClass }
						onMouseEnter={ evt => this.setValue(copyHsv) }
						onMouseLeave={ this.handleMouseLeave }
						onClick={ this.handleClick }
					>
						{
							isClicked ||
							<div
								className={ 'copy-icon ' + light }
								dangerouslySetInnerHTML={ { __html: copyIcon } }
							/>
						}
						{
							isClicked &&
							<div
								className={ 'copy-icon copied ' + light }
								dangerouslySetInnerHTML={ { __html: copiedIcon } }
							/>
						}
						<span className={ 'swatch-text' }>
							{ copyHsv }
						</span>
					</a>
				</h2>

				<textarea
					className={ 'js-copytextarea' }
					value={ value }
					ref={ 'colorText' }
					onChange={ this.handleChange }
				/>
			</li>
		);
	}
}
