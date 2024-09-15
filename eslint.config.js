import eslint from 'eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ignore build output directory
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' }, // Specify React version
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...eslint.configs.recommended.rules, // Apply recommended ESLint rules
      ...react.configs.recommended.rules, // Apply recommended React rules
      ...react.configs['jsx-runtime'].rules, // Apply JSX runtime rules
      ...reactHooks.configs.recommended.rules, // Apply recommended React Hooks rules
      'react/jsx-no-target-blank': 'off', // Custom rule adjustment
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Custom rule for React Refresh
    },
  },
];
