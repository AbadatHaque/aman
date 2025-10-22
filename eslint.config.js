// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 🧹 Ignore build and dependency folders
  globalIgnores(['dist', 'node_modules', 'build']),

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['vite.config.*'],

    // 📦 Extend recommended presets
    extends: [
      js.configs.recommended,
      react.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettier, // Disable rules that conflict with Prettier
    ],

    // 🌐 Environment & Language
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    // 🔧 Plugins
    plugins: {
      react,
      reactHooks,
    },

    // 🧠 Custom Rules
    rules: {
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Recommended if using TypeScript
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },

    // ⚙️ React Settings
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
