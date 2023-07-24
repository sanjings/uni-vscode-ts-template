module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  defaultSeverity: 'warning',
  rules: {
    'selector-class-pattern': '^(van-*)|^([a-z][a-z0-9]*)(-[a-z0-9]+)*$', // 不校验vantUI的class
    'no-empty-first-line': true, // 禁止空第一行
    'no-extra-semicolons': true, // 禁止多余的分号
    'block-closing-brace-empty-line-before': 'never', // 禁止在闭括号之前有空行
    'shorthand-property-no-redundant-values': true, // 禁止简写属性的冗余值
    'color-hex-length': 'long', // 十六进制颜色不使用缩写
    'number-no-trailing-zeros': true, // 禁止数字中的拖尾 0
    'unit-case': 'lower', // 单位必须小写
    'scss/at-import-partial-extension': 'always', // 允许@import scss
    'comment-no-empty': true, // 禁止空注释
    'at-rule-no-unknown': null, // 不验证@未知的名字，为了兼容scss的函数
    'selector-type-no-unknown': true,
    'unit-no-unknown': [
      true, // 不允许未知的单位
      { ignoreUnits: ['rpx'] } // 忽略校验的单位
    ],
    'selector-pseudo-class-no-unknown': [
      // 解决vue提供的 v-deep v-global语法的报错
      true,
      {
        ignorePseudoClasses: ['deep', 'global']
      }
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'flex',
      'display',
      'flex-direction',
      'flex-wrap',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'overflow',
      'overflow-x',
      'overflow-y',
      'font-size',
      'font-family',
      'font-weight',
      'line-height',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'outline',
      'opacity',
      'filter',
      'list-style',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
};
