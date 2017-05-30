import React, { Component } from 'react';
import './Ranking.scss';

export default class Ranking extends Component{
  render(){
    return (
      <div className="Ranking">
        <h4>Ranking:</h4>
        <p>{this.props.ranking}</p>
      </div>
    )
  }
}
