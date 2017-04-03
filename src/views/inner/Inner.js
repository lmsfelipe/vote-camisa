import React, { Component } from 'react';

import data from './../../json/teams';

export default class InnerView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: props.routeParams.id,
		}
	}

	render() {
		const { id } = this.state;

		console.log(id, data);

		return (
			<div className="InnerView">
				<p>Interna {id}</p>
			</div>
		)
	}
}
