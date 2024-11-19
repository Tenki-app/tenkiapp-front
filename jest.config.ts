const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^.+\\.(svg)$': '<rootDir>/src/__mocks__/svg.tsx',
		'^@/pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@/UI/(.*)$': '<rootDir>/src/UI/$1',
		'^@/lib/(.*)$': '<rootDir>/src/lib/$1',
		'^@/helpers/(.*)$': '<rootDir>/src/lib/helpers/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/lib/hooks/$1',
		'^@/styles/(.*)$': '<rootDir>/src/styles/$1',
		'^@/svg/(.*)$': '<rootDir>/src/UI/assets/svg/$1',
		'^@/images/(.*)$': '<rootDir>/src/UI/assets/images/$1',
	},
	moduleDirectories: ['node_modules', '<rootDir>/', 'src'],
	modulePathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/.next/',
		'<rootDir>/src/__tests__/transformers/svgTransformer.js',
	],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
