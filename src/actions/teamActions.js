import * as types from './../types/teamTypes';

export const registerVote = (team, shirt, vote) => ({
  type: types.REGISTER_VOTE,
  team,
  shirt,
  vote,
});
