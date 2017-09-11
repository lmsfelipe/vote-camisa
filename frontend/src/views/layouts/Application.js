import React, { Component } from 'react';

import Header from './../../components/Header/Header';

export default class ApplicationLayout extends Component {
  render() {
    return (
      <div className="ApplicationLayout">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
