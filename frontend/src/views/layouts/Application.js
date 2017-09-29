import React, { Component } from 'react'

import Header from './../../components/Header/Header'
import ShirtRankingView from './../inner/ShirtRankingView'

export default class ApplicationLayout extends Component {
  render() {
    return (
      <div className="ApplicationLayout">
        <Header />
        {this.props.children}
        <ShirtRankingView />
      </div>
    )
  }
}
