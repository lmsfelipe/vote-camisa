import * as types from './../types/teamTypes';

export const registerVote = (team, shirt, vote) => {
  console.log('actions');
  return {
    type: types.REGISTER_VOTE,
    team,
    shirt,
    vote: 0,
  }
};
