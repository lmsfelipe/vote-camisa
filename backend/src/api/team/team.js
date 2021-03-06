const restful = require('node-restful')
const mongoose = restful.mongoose

const teamSchema = new mongoose.Schema({
	name: String,
	slug: String,
	image: String
})

module.exports = restful.model('Team', teamSchema)
