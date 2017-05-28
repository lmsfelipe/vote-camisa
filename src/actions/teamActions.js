import * as types from './../types/teamTypes';

export const registerVote = (team, shirt, vote) => {
  return {
    type: types.REGISTER_VOTE,
    team,
    shirt,
    vote: vote !== 0 ? vote += 1 : vote,
  }
};
