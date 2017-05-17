import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { addTeam } from './actions/action';

import Routes from './config/routes';
import teamApp from './reducers.js';

import './index.scss';

let store = createStore(teamApp);

console.log('antes', store.getState());

store.dispatch(addTeam('Portuguesa'));
store.dispatch(addTeam('Macaé'));
store.dispatch(addTeam('Linense'));
store.dispatch(addTeam('Ponte Preta'));
store.dispatch(addTeam('Ibiz'));

console.log('depois', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);
