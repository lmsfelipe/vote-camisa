import React, { Component } from 'react';
import './NameShirt.scss';

class NameShirt extends Component {
	render() {
		return (
			<div className="NameShirt">
				<p>{this.props.name}</p>
			</div>
		)
	}
}

export default NameShirt;