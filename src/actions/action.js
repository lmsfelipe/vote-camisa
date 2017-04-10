export const ADD_TEAM = 'ADD_TEAM';

export function addTeam(text) {
	return {
		type: ADD_TEAM,
		text,
	}
}
