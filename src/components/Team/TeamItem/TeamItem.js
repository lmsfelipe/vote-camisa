import React, { Component } from 'react';
import './TeamItem.scss';

export default class TeamItem extends Component {
	render() {
		return (
			<div className="TeamItem">
				<img src={require(`./images/${this.props.teamLogo}.png`)} alt="Time" />
			</div>
		)
	}
}