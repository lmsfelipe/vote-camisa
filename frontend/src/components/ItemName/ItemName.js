import React, { Component } from 'react';
import './ItemName.scss';

export default class ItemName extends Component {
	render() {
		return (
			<div className="ItemName">
				<p>{this.props.name}</p>
			</div>
		)
	}
}