import React, { Component } from 'react';

import data from './../../json/teamsInfos';

export default class InnerView extends Component {
  render() {
  	const {id} = this.props.params;
    return (
      <div className="InnerView">
        <h2>{data[id].name}</h2>
      </div>
    )
  }2
}
