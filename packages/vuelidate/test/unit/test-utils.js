module.exports = require('@vue/test-utils')
module.exports.flushPromises = require('flush-promises')
const ifTest = (value) => value ? it : it.skip
module.exports.ifVue2 = ifTest(!isVue3)
module.exports.ifVue3 = ifTest(isVue3)
