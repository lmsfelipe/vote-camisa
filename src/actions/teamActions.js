import * as types from './../types/teamTypes';

export const registerVote = (team, shirt, year, vote) => ({
  type: types.REGISTER_VOTE,
  team,
  shirt,
  year,
  vote,
});
