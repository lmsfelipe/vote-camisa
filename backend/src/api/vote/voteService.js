const Vote = require('./Vote')

Vote.methods(['get', 'post', 'put', 'delete'])
Vote.updateOptions({ new: true, runValidators: true })

module.exports = Vote
