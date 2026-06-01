const base = require('./jest.base')

module.exports = {
  ...base,
  rootDir: './',
  projects: ['<rootDir>/packages/vuelidate', '<rootDir>/packages/validators', '<rootDir>/packages/components'],
  testURL: 'http://localhost/'
}
