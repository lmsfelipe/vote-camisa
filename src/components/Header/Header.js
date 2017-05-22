import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';

import './Header.scss';

export default class Header extends Component{
	render(){
		return(
			<header className="Header">
				<div className="Header__content">
					<h1>
						<Link className="Header__link" to="/">Vote camisa</Link>
					</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tincidunt felis.
					Nullam mi metus, tempor sit amet nibh id, porttitor varius metus. </p>

          <button onClick={browserHistory.goBack}>Back</button>
				</div>
			</header>
		)
	}
}
