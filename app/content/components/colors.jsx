/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Checkbox } from './checkbox';
import { ColorSets } from './colorSets';
import { Schemer } from './schemer';

/* Colors */
export class Colors extends Component {
	static propTypes = {
		config:	React.PropTypes.string,
		options: React.PropTypes.bool
	}

	constructor(props) {
		super(props);

		this.state = {
			namesChecked: true,
			hexChecked: true,
			hslChecked: false,
			hsvChecked: false
		};
	}

	onNameChanged = (newState) => {
		this.setState({ namesChecked: newState });
	}

	onHexChanged = (newState) => {
		this.setState({ hexChecked: newState });
	}

	onHslChanged = (newState) => {
		this.setState({ hslChecked: newState });
	}

	onHsvChanged = (newState) => {
		this.setState({ hsvChecked: newState });
	}

	render = () => {
		const showNames = this.state.namesChecked ? 'show-names ' : '';
		const showHex = this.state.hexChecked ? 'show-hex ' : '';
		const showHsl = this.state.hslChecked ? 'show-hsl ' : '';
		const showHsv = this.state.hsvChecked ? 'show-hsv ' : '';

		const config = this.props.config;
		/*
		console.log('\n' + '— colors.jsx (render)' + '\n * '
			+ 'config: ' + config + '\n\n'
		);
		/* */

		const options = this.props.options;
		/*
		console.log('\n' + '— colors.jsx (render)' + '\n * '
			+ 'options: ' + options + '\n\n'
		);
		/* */
		const toggleOptionsClass = options ? 'show-display-options ' : '';

		return (
			<section className={ 'content ' + toggleOptionsClass }>
				<div className={ 'display-options ' } >
					<Checkbox
						key="toggle-names"
						text="Color names"
						id="color-names"
						initialChecked={ this.state.namesChecked }
						callbackParent={ this.onNameChanged }
					/>
					<Checkbox
						key="toggle-hex"
						text="Hex codes"
						id="hex-codes"
						initialChecked={ this.state.hexChecked }
						callbackParent={ this.onHexChanged }
					/>
					<Checkbox
						key="toggle-hsl"
						text="HSL"
						id="hsl"
						initialChecked={ this.state.hslChecked }
						callbackParent={ this.onHslChanged }
					/>
					<Checkbox
						key="toggle-hsv"
						text="HSV"
						id="hsv"
						initialChecked={ this.state.hsvChecked }
						callbackParent={ this.onHsvChanged }
					/>
				</div>
				<div className={ 'colors ' + showNames + showHex + showHsl + showHsv }>
					<Schemer />
					<ul>
						<ColorSets config={ config } />
					</ul>
				</div>
			</section>
		);
	}
}
