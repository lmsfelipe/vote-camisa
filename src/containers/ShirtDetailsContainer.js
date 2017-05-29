import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import ShirtItem from './../components/Shirt/ShirtItem/ShirtItem';
import { registerVote } from './../actions/teamActions';
import teamsData from './../json/teams';

import './ShirtDetailsContainer.scss';

class ShirtDetailsContainer extends Component {
  constructor(props) {
    super(props);
    const { id, shirt, slug } = props.params;

    this.state = {
      infoTeam: teamsData[id].shirtYears[slug].shirts,
      shirt,
      id,
    };

    this.onClick = this.onClick.bind(this);
    this.filterShirt = this.filterShirt.bind(this);
  }

  filterShirt(value) {
    return value.slug === this.state.shirt;
  }

  onClick(e) {
    const team = e.target.getAttribute('data-team');
    const shirt = e.target.getAttribute('data-shirt');
    const votes = parseFloat(e.target.getAttribute('data-votes'));

    this.props.onClickVote(team, shirt, votes);
  }

  render() {
    const { quantVotes } = this.props;
    return (
      <div className="ShirtDetailsContainer">
        {
          this.state.infoTeam.filter(this.filterShirt).map((item, i) => {
            const votes = quantVotes[this.state.id] && quantVotes[this.state.id][item.slug] ?
              quantVotes[this.state.id][item.slug] : 0;

            return (
              <div key={`shirt-${i}`}>
                <ShirtItem
                  shirtName={item.shirtName}
                  shirtImage={item.shirtImage}
                />

                {
                  votes > 0 &&
                    <p className="ShirtDetailsContainer__votes">Esta camisa recebeu {votes > 1 ? `${votes} votos` : `${votes} voto`}</p>
                }

                <Button
                  bsStyle="info"
                  data-team={this.state.id}
                  data-shirt={item.slug}
                  data-votes={votes}
                  onClick={this.onClick}
                  className="ShirtDetailsContainer__button"
                >
                  Votar nesta camisa
                </Button>
              </div>
            )
          })
        }
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

const mapDispatchToProps = dispatch => ({
  onClickVote: (team, shirt, vote) => {
    dispatch(registerVote(team, shirt, vote));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtDetailsContainer);
