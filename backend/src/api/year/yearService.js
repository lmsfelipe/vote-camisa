const ShirtYear = require('./shirtYear')

ShirtYear.methods(['get', 'post', 'put', 'delete'])
ShirtYear.updateOptions({ new: true, runValidators: true })

module.exports = ShirtYear
