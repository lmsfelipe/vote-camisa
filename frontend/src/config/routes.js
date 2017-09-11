import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import ApplicationLayout from './../views/layouts/Application';
import HomeView from './../views/home/Home';
import InnerView from './../views/inner/Inner';
import ShirtDetailsView from './../views/inner/ShirtDetailsView';
// import ShirtDetailsContainer from './../containers/ShirtDetailsContainer';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export default class Routes extends Component {
	render() {
		return (
		  <Router history={history}>
		    <Route component={ApplicationLayout}>
		      <Route path="/" component={HomeView} />
		      <Route path="/:team" component={InnerView} />
          <Route path="/:team/:year" component={ShirtDetailsView} />
		    </Route>
		  </Router>
		);
	}
}