import React, { Component } from 'react'
import { Router, Route, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import ApplicationLayout from './../views/layouts/Application'
import HomeView from './../views/home/Home'
import ShirtYearsView from './../views/inner/ShirtYearsView'
import ShirtDetailsView from './../views/inner/ShirtDetailsView'

const history = useRouterHistory(createHistory)({
  basename: '/',
})

export default class Routes extends Component {
	render() {
		return (
		  <Router history={history}>
		    <Route component={ApplicationLayout}>
		      <Route path="/" component={HomeView} />
		      <Route path="/:team" component={ShirtYearsView} />
          <Route path="/:team/:year" component={ShirtDetailsView} />
		    </Route>
		  </Router>
		)
	}
}
