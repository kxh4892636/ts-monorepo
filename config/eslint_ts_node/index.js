// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "promise", "prettier"],
  rules: { "prettier/prettier": "error" },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json", "package/*/tsconfig.json"],
      },
      node: {
        project: ["tsconfig.json", "package/*/tsconfig.json"],
      },
    },
  },
};
