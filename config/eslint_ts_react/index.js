// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "jsx-a11y", "promise", "import"],
  rules: {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "array-element-newline": ["error", { "multiline": true }]
  },
  settings: {
    react: {
      version: "detect",
    },
    // "import/resolver": {
    //   typescript: {
    //     alwaysTryTypes: true,
    //     project: ["tsconfig.json", "package/*/tsconfig.json"],
    //   },
    //   node: {
    //     project: ["tsconfig.json", "package/*/tsconfig.json"],
    //   },
    // },
  },
};
