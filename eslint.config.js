import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: [
    'dist',
    'node_modules',
  ],
  rules: {
    'curly': 'off',
    'antfu/consistent-list-newline': 'off',
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})
