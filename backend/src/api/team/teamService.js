const Team = require('./team')

Team.methods(['get', 'post', 'put', 'delete'])
Team.updateOptions({ new: true, runValidators: true })

module.exports = Team
