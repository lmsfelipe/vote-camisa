import React, { Component } from 'react';

import TeamListView from './TeamListView'

export default class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <TeamListView />
      </div>
    )
  }
}
