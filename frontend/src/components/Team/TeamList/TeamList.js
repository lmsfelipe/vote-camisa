import React, { Component } from 'react';

import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';
import teamsData from './../../../json/teams';
import TeamListContainer from './../../../containers/TeamListContainer'

export default class TeamList extends Component{
	render(){
    return(
      <div className="TeamList">
        <TeamListContainer />
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
