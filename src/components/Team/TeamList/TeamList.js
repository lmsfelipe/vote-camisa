import React, {Component} from 'react';
import TeamItem from './../TeamItem/TeamItem'
import './TeamList.scss';


export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				<TeamItem
		          teamLogo="santos"
		        />
		        <TeamItem
		          teamLogo="spfc"
		        />
		        <TeamItem
		          teamLogo="corinthians"
		        />
		        <TeamItem
		          teamLogo="palmeiras"
		        />
			</div>
		)
	}
}