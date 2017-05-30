import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ranking from './../components/Ranking/Ranking';
import { registerVote } from './../actions/teamActions';

class ShirtRankingContainer extends Component {
  render(){
    const { quantVotes } = this.props;
    console.log(quantVotes);
    return (
      <div>
        <Ranking />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('container', state);
  return {
    quantVotes: state.teams.votes,
  }
};

export default connect(
  mapStateToProps,
)(ShirtRankingContainer);
