const restful = require('node-restful')
const mongoose = restful.mongoose

const teamSchema = new mongoose.Schema({
	createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Team', teamSchema)
