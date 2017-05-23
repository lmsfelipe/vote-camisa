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
      teams: [],
      slug,
      id,
    };

    this.filterShirt = this.filterShirt.bind(this);
  }

  componentDidMount() {
    this.setState({
      teams: teamsData[this.state.id].shirts.filter(this.filterShirt),
    });
  }

  filterShirt(shirt) {
    return shirt.slug === this.state.slug;
  }

  render() {
    return (
      <ShirtInner
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
  onClickVote: (vote) => {
    dispatch(registerVote(vote))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtInnerContainer);
