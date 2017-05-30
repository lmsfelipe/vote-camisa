import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Ranking from './../components/Ranking/Ranking';

class ShirtRankingContainer extends Component {
  render(){
    const { globalState } = this.props;

    return (
      <div>
      {console.log(globalState)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    globalState: state.teams,
  }
};

export default connect(
  mapStateToProps,
)(ShirtRankingContainer);
