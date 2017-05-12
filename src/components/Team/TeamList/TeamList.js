import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';
import teamsData from './../../../json/teams';

console.log(Object.entries(teamsData));
Object.entries(teamsData).forEach(([key, value], index) => {
	console.log(key, index);
})

export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				{
					Object.entries(teamsData).forEach(([key, value], index) => {
						console.log(key, value);
						<TeamItem
			    			teamLogo={key.teamImage}
							slug={key.slug}
			    		/>
					})					
				}
			</div>
		)
	}
}
