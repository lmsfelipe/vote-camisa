import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem'
import './TeamList.scss';


export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				<TeamItem
        	teamLogo="santos"
					slug="st"
        />
	      <TeamItem
	        teamLogo="spfc"
					slug="sp"
	      />
	      <TeamItem
	        teamLogo="corinthians"
					slug="ct"
	      />
	      <TeamItem
	        teamLogo="palmeiras"
					slug="pm"
	      />
			</div>
		)
	}
}
