import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Ranking from './../components/Ranking/Ranking';

class ShirtRankingContainer extends Component {
  render(){
    const { globalVote } = this.props;

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



/* Lógica Ordenar votos */

/*
const votes = {
    santos: {
        "2012": {
            "camisa-a": 34,
            "camisa-b": 12,
        },
        "2013": {
            "camisa-a": 12,
            "camisa-b": 67,
        },
    },
    palmeiras: {
        "2012": {
            "camisa-a": 56,
            "camisa-b": 12,
        },
        "2013": {
            "camisa-a": 45,
            "camisa-b": 67,
        },
    },
    corinthians: {
        "2012": {
            "camisa-a": 23,
            "camisa-b": 12,
        },
        "2013": {
            "camisa-a": 68,
            "camisa-b": 42,
        },
    },
}

var teamGlobal = new Array();
console.log(teamGlobal)
for (time in votes){

    Object.entries(votes[time]).map( ano => {
        Object.entries(ano[1]).map( camisa => {

            if(!teamGlobal[camisa[1]]) {
                teamGlobal[camisa[1]] = new Array();
            }

            if(!teamGlobal[camisa[1]][time]) {
                teamGlobal[camisa[1]][time] = new Array();
            }

            if(!teamGlobal[camisa[1]][time][ano[0]]) {
                teamGlobal[camisa[1]][time][ano[0]] = new Array();
            }
            teamGlobal[camisa[1]][time][ano[0]][camisa[0]] = camisa[1];
        })
    })
}

teamGlobal.sort(function(a, b) {
  return a - b;
});

console.log(teamGlobal);*/
