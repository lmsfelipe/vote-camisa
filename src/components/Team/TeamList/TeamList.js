import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';
import teamsData from './../../../json/teams';
import teamsDataArr from './../../../json/teamsArr';

export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				{
					teamsDataArr.map((item, i) => {
						console.log('map', item);

						return (
							<TeamItem
								key={i}
			    			teamLogo={item.teamImage}
								slug={item.slug}
			    		/>
						)
					})
				}

				<div className="Object">
					{
						Object.entries(teamsData).map((value, index) => {
						  console.log('Object', value);

							return (
								<TeamItem
									key={index}
							    teamLogo={value[1].teamImage}
							    slug={value[1].slug}
							  />
							)
						})
					}
				</div>
			</div>
		)
	}
}
