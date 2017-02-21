import React, {Component} from 'react';
import './Header.scss';

export default class Header extends Component{
	render(){
		return(
			<header className="Header">
				<div className="Header__content">
					<h1>Vote camisa</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt felis. 
					Nullam mi metus, tempor sit amet nibh id, porttitor varius metus. </p>
				</div>
			</header>
		)
	}
}