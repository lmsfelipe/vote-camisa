import * as types from './../types/teamTypes';

export const addTeam = text => {
	return {
		type: types.ADD_TEAM,
		text,
	}
};

export const registerVote = vote => ({
  type: types.REGISTER_VOTE,
  vote,
});
