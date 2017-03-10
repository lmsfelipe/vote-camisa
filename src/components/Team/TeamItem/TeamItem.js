import React, { Component } from 'react';
import { Link } from 'react-router';

import './TeamItem.scss';

export default class TeamItem extends Component {
	render() {
		return (
			<div className="TeamItem">
				<Link to="/inner/">
					<img src={require(`./images/${this.props.teamLogo}.png`)} alt="Time" />
				</Link>
			</div>
		)
	}
}
