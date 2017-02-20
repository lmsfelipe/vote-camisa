import React, { Component } from 'react';
import './ShirtItem.scss';

class ShirtItem extends Component {
	render() {
		return (
			<div className="ShirtItem">
				<p>{this.props.team}</p>
				<img src={require(`./images/${this.props.slug}-${this.props.shirt}.jpg`)} alt="Camisa" />
			</div>
		)
	}
}

export default ShirtItem;