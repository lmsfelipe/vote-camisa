import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import ShirtItem from './../components/Shirt/ShirtItem/ShirtItem';

import { registerVote, sum } from './../actions/teamActions';
import * as TeamSelectors from './../selectors/teamSelectors';

import teamsData from './../json/teams';

import './ShirtDetailsContainer.scss';

class ShirtDetailsContainer extends Component {
  constructor(props) {
    super(props);
    const { team, year } = props.params;

    this.state = {
      infoTeam: teamsData[team].shirtYears[year].shirts,
      team,
      year,
    };

    this.onClick = this.onClick.bind(this);
    this.onClickSum = this.onClickSum.bind(this);
  }

  onClickSum() {
    const { sum } = this.props;
    let newSum = sum;
    let updateSum = newSum += 1;

    this.props.onClickSum(updateSum);

    console.log('click sum', updateSum);
  }

  onClick(e) {
    const team = e.target.getAttribute('data-team');
    const shirt = e.target.getAttribute('data-shirt');
    const year = e.target.getAttribute('data-year');
    const votes = parseFloat(e.target.getAttribute('data-votes'));

    this.props.onClickVote(team, shirt, year, votes);
  }

  render() {
    const { quantVotes } = this.props;
    return (
      <div className="ShirtDetailsContainer">
        {
          this.state.infoTeam.map((item, i) => {
            const votes = quantVotes[this.state.team] && quantVotes[this.state.team][item.slug] ?
              quantVotes[this.state.team][item.slug] : 0;

            // console.log('container render', quantVotes, item.slug);

            return (
              <div key={`shirt-${i}`}>
                <ShirtItem
                  shirtName={item.shirtName}
                  shirtImage={item.shirtImage}
                />

                <p>{item.info}</p>

                {
                  votes > 0 &&
                    <p className="ShirtDetailsContainer__votes">Esta camisa recebeu {votes > 1 ? `${votes} votos` : `${votes} voto`}</p>
                }

                <Button
                  bsStyle="info"
                  data-team={this.state.team}
                  data-shirt={item.slug}
                  data-year={this.state.year}
                  data-votes={votes}
                  onClick={this.onClick}
                  className="ShirtDetailsContainer__button"
                >
                  Votar nesta camisa
                </Button>

                <Button bsStyle="info" onClick={this.onClickSum}>
                  Some aqui!
                </Button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  quantVotes: TeamSelectors.quantVotes(state),
  sum: TeamSelectors.sum(state),
});

const mapDispatchToProps = dispatch => ({
  onClickVote: (team, shirt, year, vote) => {
    dispatch(registerVote(team, shirt, year, vote));
  },
  onClickSum: (number) => {
    dispatch(sum(number));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtDetailsContainer);
