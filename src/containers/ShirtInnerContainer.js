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
      id,
    };
  }

  render() {
    return (
      <ShirtInner
        id={this.state.id}
        params={this.props.params}
        teams={this.state.teams}
        registerVote={this.props.onClickVote}
      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {}
};

const mapDispatchToProps = dispatch => ({
  onClickVote: (team, shirt) => {
    dispatch(registerVote(team, shirt))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtInnerContainer);
