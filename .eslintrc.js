module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'simple-import-sort',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'commitlint.config.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    // 'no-console': 'error',
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    // 'unused-imports/no-unused-imports': 'error',
    // 'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'function', next: 'function' },
      { blankLine: 'always', prev: 'expression', next: 'return' },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },
};
