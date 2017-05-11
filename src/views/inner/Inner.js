import React, { Component } from 'react';
import teamsData from './../../json/teams';
import ShirtItem from './../../components/Shirt/ShirtItem/ShirtItem';

export default class InnerView extends Component {
  render() {
  	const {id} = this.props.params;
    console.log(id);
    return (
      <div className="InnerView">
        <h2>{teamsData[id].name}</h2>

        <ShirtItem
          shirtName={teamsData[id].shirts[1].shirtYear}
        	shirtImage={teamsData[id].shirts[1].shirtImage}
        />

      </div>
    )
  }
}
