const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// VOTE ROUTES
	const todoService = require('../api/vote/voteService')
	todoService.register(router, '/votes')

}
