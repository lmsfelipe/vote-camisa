import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';
import teamsData from './../../../json/teams';

console.log(teamsData);


export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				<TeamItem
	    			teamLogo={teamsData.santos.teamImage}
					slug={teamsData.santos.slug}
        		/>
        		<TeamItem
	    			teamLogo={teamsData.saoPaulo.teamImage}
					slug={teamsData.saoPaulo.slug}
        		/>
			</div>
		)
	}
}
