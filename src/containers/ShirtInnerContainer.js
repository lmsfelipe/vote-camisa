import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerVote } from './../actions/teamActions';
import teamsData from './../json/teams';
import ShirtInner from './../components/Shirt/ShirtInner/ShirtInner';

class ShirtInnerContainer extends Component {
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
    console.log('container', this.props);

    return (
      <ShirtInner
        id={this.state.id}
        params={this.props.params}
        teams={this.state.teams}
        quantVotes={this.props.quantVotes}
        registerVote={this.props.onClickVote}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  return {
    quantVotes: state.teams.votes[ownProps.params.id],
  }
};

const mapDispatchToProps = dispatch => ({
  onClickVote: (team, shirt, vote) => {
    dispatch(registerVote(team, shirt, vote))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtInnerContainer);
