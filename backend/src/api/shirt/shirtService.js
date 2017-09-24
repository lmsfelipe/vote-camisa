const Shirt = require('./shirt')

Shirt.methods(['get', 'post', 'put', 'delete'])
Shirt.updateOptions({ new: true, runValidators: true })

module.exports = Shirt
