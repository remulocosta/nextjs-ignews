module.exports = {
  globals: {
    'ts-jest': {
        isolatedModules: true
    }
  },
  collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
  ],
  moduleFileExtensions: [
      'css',
      'js',
      'json',
      'jsx',
      'scss',
      'ts',
      'tsx'
  ],
  moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
      '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
      '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  modulePaths: [
      '<rootDir>'
  ],
  roots: [
      '<rootDir>/src'
  ],
  testRegex: 'src/test/t_.*\.(ts|tsx)$',
  testEnvironment: 'jsdom',
  transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
      '/node_modules/',
      '^.+\\.module\\.(css|sass|scss)$',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/test/config/jest.setup.js']
};
