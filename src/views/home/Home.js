import React, { Component } from 'react';

import TeamList from './../../components/Team/TeamList/TeamList';
import ShirtRankingView from './../inner/ShirtRankingView';

export default class HomeView extends Component {
  render() {
    return (
      <div className="HomeView">
        <TeamList />
        <ShirtRankingView />
      </div>
    )
  }
}
