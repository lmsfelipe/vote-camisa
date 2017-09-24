const restful = require('node-restful')
const mongoose = restful.mongoose

const shirtSchema = new mongoose.Schema({
	team: String,
	year: String,
	name: String,
	slug: String,
	image: String,
	votes: Number
})

module.exports = restful.model('Shirt', shirtSchema)
