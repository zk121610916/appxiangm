module.exports = {
  presets: [
    '@vue/app'
  ],
  // 安装依赖 yarn add babel-plugin-import -D 后修改
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
