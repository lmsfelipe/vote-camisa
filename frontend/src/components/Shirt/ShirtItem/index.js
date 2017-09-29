import React, { Component } from 'react';
import './ShirtItem.scss';
import ItemName from './../../ItemName/ItemName'

export default class ShirtItem extends Component {
	render() {
		return (
			<div className="ShirtItem">
				{
					this.props.shirtName &&
						<ItemName name={this.props.shirtName} />
				}

				<img src={require(`./images/${this.props.shirtImage}`)} alt="Camisa" />
        <h3>{this.props.votes}</h3>
			</div>
		)
	}
}
