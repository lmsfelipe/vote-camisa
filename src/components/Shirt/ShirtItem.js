import React, { Component } from 'react';
import './ShirtItem.scss';
import NameShirt from './../Name/NameShirt'

class ShirtItem extends Component {
	render() {
		return (
			<div className="ShirtItem">
				{this.props.team !== undefined && <NameShirt name={this.props.team} />}
				<img src={require(`./images/${this.props.slug}-${this.props.shirt}.jpg`)} alt="Camisa" />
			</div>
		)
	}
}

export default ShirtItem;