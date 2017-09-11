import React, { Component } from 'react';
import ShirtRankingContainer from './../../containers/ShirtRankingContainer';

export default class ShirtRankingView extends Component {
  render() {
    return (
      <ShirtRankingContainer params={this.props.params} />
    )
  }
}
