import React, { Component } from 'react';
import ShirtVoteContainer from './../../containers/ShirtVoteContainer';

export default class ShirtDetailsView extends Component {
  render() {
    return (
      <ShirtVoteContainer params={this.props.params} />
    )
  }
}
