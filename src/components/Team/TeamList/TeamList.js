import React, { Component } from 'react';
import TeamItem from './../TeamItem/TeamItem'
import './TeamList.scss';


export default class TeamList extends Component{
	render(){
		return(
			<div className="TeamList">
				<TeamItem
	    			teamLogo="santos"
					slug="santos"
        		/>
				<TeamItem
					teamLogo="spfc"
					slug="saopaulo"
				/>
				<TeamItem
					teamLogo="corinthians"
					slug="corinthians"
				/>
				<TeamItem
					teamLogo="palmeiras"
					slug="palmeiras"
				/>
			</div>
		)
	}
}
