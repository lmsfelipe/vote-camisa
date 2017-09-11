import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';
import teamsData from './../../../json/teams';

export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				{
					Object.entries(teamsData).map((value, index) => {
						return(
							<TeamItem
								key={index}
						    teamLogo={value[1].teamImage}
						    slug={value[1].slug}
					  	/>
						)
					})
				}
			</div>
		)
	}
}