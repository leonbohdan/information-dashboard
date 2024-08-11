export default [
  {
    files: ['src/**/**/**/*.vue'],
    root: true,
    env: {
      browser: true,
      node: true
    },
    extends: ['plugin:nuxt/recommended', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
      'nuxt/no-cjs-in-config': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed'],
      semi: ['error', 'never'],
      'vue/max-attributes-per-line': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: false,
          // 'parser': 'flow',
          arrowParens: 'avoid',
          trailingComma: 'all',
          vueIndentScriptAndStyle: true
        }
      ]
    }
  }
]
