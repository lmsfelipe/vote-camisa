const restful = require('node-restful')
const mongoose = restful.mongoose

const shirtYearSchema = new mongoose.Schema({
	team: String,
	name: String,
	slug: String,
	image: String
})

module.exports = restful.model('ShirtYear', shirtYearSchema)
