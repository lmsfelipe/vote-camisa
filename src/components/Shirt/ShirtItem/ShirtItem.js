import React, { Component } from 'react';
import './ShirtItem.scss';
import ItemName from './../../ItemName/ItemName'

export default class ShirtItem extends Component {
	render() {
		return (
			<div className="ShirtItem">
				{this.props.shirtName !== undefined && <ItemName name={this.props.shirtName} />}
				<img src={require(`./images/${this.props.slug}-${this.props.shirt}.jpg`)} alt="Camisa" />
			</div>
		)
	}
}