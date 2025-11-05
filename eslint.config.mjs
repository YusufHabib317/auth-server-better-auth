import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

// Adapt previous .eslintrc.cjs configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": tseslint
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: "./tsconfig.json"
      },
      globals: {
        console: "readonly",
        process: "readonly",
        Express: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
      }
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_|^[A-Z][A-Z_]+$",
      }]
    }
  },
  ...compat.config({
    extends: [
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:promise/recommended',
      'prettier',
    ],
    plugins: ['import', 'promise'],
  }),
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // General rules
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_|^[A-Z][A-Z_]+$', // Ignore _variables and ENUM_VALUES
      }],
      'import/no-unresolved': 'off', // Turn off unresolved imports

      // Import rules
      'import/order': ['error', {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      }],

      // General best practices
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
      'no-nested-ternary': 'error',
      'spaced-comment': ['error', 'always'],

      // Promise rules
      'promise/always-return': 'warn',
      'promise/catch-or-return': 'error',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      '.vscode/**',
      '.github/**',
      '**/*.js.map',
      '**/*.d.ts',
      'uploads/**',
      'prisma/**',
      'build/**',
      'logs/**',
    ],
  },
];
