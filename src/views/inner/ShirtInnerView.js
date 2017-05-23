import React, { Component } from 'react';
import ShirtInnerContainer from './../../containers/ShirtInnerContainer';

export default class ShirtInnerView extends Component {
  render() {
    return (
      <ShirtInnerContainer params={this.props.params} />
    )
  }
}
