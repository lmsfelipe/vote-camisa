import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import ShirtItem from './../components/Shirt/ShirtItem/ShirtItem';

import { registerVote, sum } from './../actions/teamActions';
import * as TeamSelectors from './../selectors/teamSelectors';

import teamsData from './../json/teams';

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
    const { sum, sumTotal } = this.props
    let newSum = parseInt(sumTotal, 10) + 1
    sum(newSum)
    console.log('click sum', sumTotal)
  }

  onClick(e) {
    const team = e.target.getAttribute('data-team');
    const shirt = e.target.getAttribute('data-shirt');
    const year = e.target.getAttribute('data-year');
    const votes = parseFloat(e.target.getAttribute('data-votes'));
    let getVotes = votes;
    let updateVotes = getVotes += 1;

    this.props.registerVote(team, shirt, year, updateVotes);
  }

  render() {
    const { quantVotes } = this.props;
    return (
      <div className="ShirtDetailsContainer">
        <Button bsStyle="info" onClick={this.onClickSum}>
          Some aqui!
        </Button>
        {
          this.state.infoTeam.map((item, i) => {
            const votes =
              quantVotes[this.state.team] &&
              quantVotes[this.state.team][this.state.year] &&
              quantVotes[this.state.team][this.state.year][item.slug] ?
              quantVotes[this.state.team][this.state.year][item.slug] : 0;

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
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    quantVotes: TeamSelectors.quantVotes(state),
    sumTotal: TeamSelectors.sum(state),
    data: state.teams.data
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  registerVote,
  sum
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtDetailsContainer);
