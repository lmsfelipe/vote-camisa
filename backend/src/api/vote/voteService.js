const Vote = require('./vote')

Vote.methods(['get', 'post', 'put', 'delete'])
Vote.updateOptions({ new: true, runValidators: true })

module.exports = Vote
