module.exports = {
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json']
};