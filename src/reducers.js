import { combineReducers } from 'redux';
import { ADD_TEAM } from './actions/action';

teams(state = [], action) => {
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
}

export default teamApp = combineReducers({
	teams,
});
