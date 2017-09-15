import React, { Component } from 'react';

import TeamItem from './../TeamItem/TeamItem';
import './TeamList.scss';

export default class TeamList extends Component{
  constructor(props){
    super(props)

    this.teamListItems = this.teamListItems.bind(this)
  }

  teamListItems() {
    const { teams } = this.props
    return Array.from(teams).map((team, i) => {
      return(
        <TeamItem
          key={i}
          teamLogo={team.image}
          slug={team.slug}
       />
      )
    })
  }

  render(){
    return(
      <div className="TeamList">
        { this.teamListItems() }
      </div>
    )
  }
}
