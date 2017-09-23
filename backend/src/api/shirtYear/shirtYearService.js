const shirtYear = require('./shirtYear')

shirtYear.methods(['get', 'post', 'put', 'delete'])
shirtYear.updateOptions({ new: true, runValidators: true })

module.exports = shirtYear
