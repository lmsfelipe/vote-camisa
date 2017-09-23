const Year = require('./year')

Year.methods(['get', 'post', 'put', 'delete'])
Year.updateOptions({ new: true, runValidators: true })

module.exports = Year
