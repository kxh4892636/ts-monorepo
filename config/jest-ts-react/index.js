/** @type {import('ts-jest').JestConfigWithTsJest} */
export const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        isolatedModules: true,
        diagnostics: false,
      },
    ],
  }
};
