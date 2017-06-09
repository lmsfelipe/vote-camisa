import * as types from './../types/teamTypes';

export const sum = (number) => ({
  type: types.SUM,
  number,
});

export const registerVote = (team, shirt, year, vote) => ({
  type: types.REGISTER_VOTE,
  team,
  shirt,
  year,
  vote,
});
