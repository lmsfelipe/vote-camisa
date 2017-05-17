export const ADD_TEAM = 'ADD_TEAM';
export const REGISTER_VOTE = 'REGISTER_VOTE';

export function addTeam(text) {
	return {
		type: ADD_TEAM,
		text,
	}
}

export const registerVote = vote => ({
  type: REGISTER_VOTE,
  vote,
});
