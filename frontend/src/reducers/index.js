import { combineReducers } from 'redux';

import { voteCamisa } from './voteCamisaReducers';

const voteCamisaApp = combineReducers({
  voteCamisa,
});

export default voteCamisaApp;
