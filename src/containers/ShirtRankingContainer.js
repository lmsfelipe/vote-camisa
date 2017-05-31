import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Ranking from './../components/Ranking/Ranking';

class ShirtRankingContainer extends Component {
  render(){
    const { globalVote } = this.props;

    let voteSorted

    Object.entries(globalVote).map( (item, i) => {
      console.log(item[1])
      let shirt = item[1]
      voteSorted = Object.keys(shirt).sort( (a,b) => {
          return shirt[a]-shirt[b]
      })
      console.log(voteSorted)
    })

    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    globalVote: state.teams.votes,
  }
};

export default connect(
  mapStateToProps,
)(ShirtRankingContainer);
