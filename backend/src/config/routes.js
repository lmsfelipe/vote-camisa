const express = require('express')

module.exports = function(server) {

	// API ROUTES
	const router = express.Router()
	server.use('/api', router)

	// VOTE ROUTES
	const voteService = require('../api/vote/voteService')
	voteService.register(router, '/votes')

}
