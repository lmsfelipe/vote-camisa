import React, { Component } from 'react';
import './ShirtItem.scss';
import NameShirt from './../Name/NameShirt'

class ShirtItem extends Component {
	render() {
		return (
			<div className="ShirtItem">
				{this.props.team !== null ? <NameShirt name={this.props.team} /> : null}
				<img src={require(`./images/${this.props.slug}-${this.props.shirt}.jpg`)} alt="Camisa" />
			</div>
		)
	}
}

export default ShirtItem;