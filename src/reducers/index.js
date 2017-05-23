import { combineReducers } from 'redux';

import { teams } from './teamReducers';

const teamApp = combineReducers({
  teams,
});

export default teamApp;
