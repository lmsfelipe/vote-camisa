import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import ApplicationLayout from './../views/layouts/Application';
import HomeView from './../views/home/Home';
import InnerView from './../views/inner/Inner';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export default (
  <Router history={history}>
    <Route component={ApplicationLayout}>
      <Route path="/" component={HomeView} />
      <Route path="/inner/:id" component={InnerView} />
    </Route>
  </Router>
);
