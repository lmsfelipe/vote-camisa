import { combineReducers } from 'redux';
import { ADD_TEAM, REGISTER_VOTE } from './actions/action';

const initialState = [];

function teams(state = initialState, action) {
	switch (action.type) {
		case ADD_TEAM:
			return Object.assign(
        {},
		    state,
  			{
          ...state,
  				text: action.text,
  			},
      );
    case REGISTER_VOTE:
      return Object.assign(
        {},
        state,
        {
          ...state.entry,
          vote: action.vote,
        },
      );
		default:
			return state;
	}
};

const teamApp = combineReducers({
	teams,
});

export default teamApp;
