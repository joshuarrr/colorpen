import React, { Component } from 'react';

/* Checkboxes */
export class Checkbox extends Component {
	static propTypes = {
		initialChecked: React.PropTypes.bool,
		callbackParent: React.PropTypes.function,
		id: React.PropTypes.string,
		text: React.PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.initialChecked
		};
	}

	handleChange() {
		const newState = !this.state.checked;
		this.setState({ checked: newState });
		this.props.callbackParent(newState); // hey parent, I"ve changed!
	}

	render() {
		const labelStyle = this.state.checked ? ' checked' : '';

		return (
			<div className="checkbox">
				<label
				className={ 'checkbox-label ' + labelStyle }
				id={ this.props.id }
				>
					<input
						checked={ this.props.initialChecked }
						id={ this.props.id }
						onClick={ this.handleChange }
						type="checkbox"
						className="checkbox-input"
					/>
					<span className="checkbox-label-text">
						{ this.props.text }
					</span>
				</label>
			</div>
		);
	}
}
