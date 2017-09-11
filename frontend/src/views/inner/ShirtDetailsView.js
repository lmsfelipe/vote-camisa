import React, { Component } from 'react';
import ShirtDetailsContainer from './../../containers/ShirtDetailsContainer';

export default class ShirtDetailsView extends Component {
  render() {
    return (
      <ShirtDetailsContainer params={this.props.params} />
    )
  }
}
