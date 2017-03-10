import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import ApplicationLayout from './../views/layouts/Application';
import HomeView from './../views/home/Home';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export default (
  <Router history={history}>
    <Route component={ApplicationLayout}>
      <Route path="/" component={HomeView} />
    </Route>
  </Router>
);
