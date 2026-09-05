import js from '@eslint/js';
import muiPathImports from 'eslint-plugin-mui-path-imports';
import perfectionist from 'eslint-plugin-perfectionist';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/', 'locales/', 'node_modules/', 'storybook-static/'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...storybook.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  {
    plugins: {
      'mui-path-imports': muiPathImports,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'mui-path-imports/mui-path-imports': 'warn',
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              react: '^react$',
            },
            value: {
              faker: '^@faker/',
              mrt: ['^[.]/MRT_', '^[.][.]/.*MRT_', '^[.][.]/[.][.]/src'],
              mui: '^@mui/',
              react: ['^react$', '^react-'],
              storybook: '^@storybook/',
              tanstack: '^@tanstack/',
            },
          },
          groups: [
            'react',
            'tanstack',
            'mui',
            'mrt',
            'sibling',
            'sibling-type',
            'parent',
            'parent-type',
            'style',
          ],
          newlinesBetween: 'never',
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
);
