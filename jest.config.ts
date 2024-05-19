export { };
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
        '!**/vendor/**'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
        ".(ts|tsx)": "ts-jest"
    },
    moduleNameMapper: {
        '^.+\\.(svg)$': '<rootDir>/src/__mocks__/svg.tsx',
        '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
        '^@/UI/(.*)$': '<rootDir>/src/UI/$1',
        '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
        '^@/__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
        '^@/helpers/(.*)$': '<rootDir>/src/lib/helpers/$1',
        '^@/hooks/(.*)$': '<rootDir>/src/lib/hooks/$1',
        '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
        '^@/svg/(.*)$': '<rootDir>/src/UI/assets/svg/$1',
        '^@/images/(.*)$': '<rootDir>/src/UI/assets/images/$1',
    },
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/coverage",
        "package.json",
        "package-lock.json",
        "reportWebVitals.ts",
        "setupTests.ts",
        "index.tsx"
    ],
}