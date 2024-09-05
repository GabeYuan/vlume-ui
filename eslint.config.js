import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      'prettier/prettier': 'error'
      // 'no-console': 'off',
      // 'no-restricted-globals': 'off',
      // 'no-restricted-syntax': 'off',
      // 'vue/multi-word-component-names': 'off',
      // 'no-multiple-empty-lines': ['warn', { max: 1 }],
      // 'vue/valid-template-root': 'off'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    ignores: ['node_modules', 'build']
  }
]
