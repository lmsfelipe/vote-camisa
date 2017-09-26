import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import Routes from './config/routes';
import voteCamisaApp from './reducers/';

import './index.scss';

let store = createStore(
  voteCamisaApp,
  applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);
