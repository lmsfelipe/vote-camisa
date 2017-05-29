import React, { Component } from 'react';

import teamsData from './../../json/teams';
import ShirtInner from './../../components/Shirt/ShirtInner/ShirtInner';

export default class ShirtInnerView extends Component {
  constructor(props) {
    super(props);
    const { id, slug } = props.params;

    this.state = {
      teams: teamsData[id].shirtYears[slug].shirts,
      slug,
      id,
    };
  }

  render() {
    return (
      <ShirtInner
        id={this.state.id}
        slug={this.state.slug}
        teams={this.state.teams}
      />
    )
  }
}
