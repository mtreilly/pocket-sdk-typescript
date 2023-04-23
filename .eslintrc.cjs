module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "tsconfig.json"),
  },
  plugins: ["@typescript-eslint"],
  root: true,
  globals: {
    fetch: true,
    process: true,
    console: true,
  },
  env: {
    jest: true,
    browser: true,
  },
  ignorePatterns: ["dist/*"],
};
