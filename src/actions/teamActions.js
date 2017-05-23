import * as types from './../types/teamTypes';

let countVotes = 0;

export const addTeam = text => {
	return {
		type: types.ADD_TEAM,
		text,
	}
};

export const registerVote = (team, shirt, vote) => ({
  type: types.REGISTER_VOTE,
  team,
  shirt,
  vote: countVotes++,
});
