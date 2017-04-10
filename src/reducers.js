import { combineReducers } from 'redux';
import { ADD_TEAM } from './actions/action';

const initialState = []

function teams(state = initialState, action) {
	switch (action.type) {
		case ADD_TEAM:
			return [
			...state,
			{
				text: action.text,
			}
		]
		default:
			return state
	}
};

const teamApp = combineReducers({
	teams,
});

export default teamApp;
