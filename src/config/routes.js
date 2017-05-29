import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import ApplicationLayout from './../views/layouts/Application';
import HomeView from './../views/home/Home';
import InnerView from './../views/inner/Inner';
import ShirtInnerView from './../views/inner/ShirtInnerView';
import ShirtDetailsView from './../views/inner/ShirtDetailsView';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export default class Routes extends Component {
	render() {
		return (
		  <Router history={history}>
		    <Route component={ApplicationLayout}>
		      <Route path="/" component={HomeView} />
		      <Route path="/:id" component={InnerView} />
          <Route path="/:id/:slug" component={ShirtInnerView} />
          <Route path="/:id/:slug/:shirt" component={ShirtDetailsView} />
		    </Route>
		  </Router>
		);
	}
}
