import React, { Component } from 'react';

import TeamList from './../../components/Team/TeamList/TeamList';

export default class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <TeamList />
      </div>
    )
  }
}
