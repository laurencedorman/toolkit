module.exports = {
  plugins: ['stylelint-scss'],
  ignoreFiles: [
    // Ignoring JS ans JSX files is necessary for VSCode to not lint theses files in some cases ¯\_(ツ)_/¯
    '**/*.js',
    '**/*.jsx',
  ],
  extends: 'stylelint-config-recommended',
  rules: {
    'color-hex-length': 'long',
    'color-named': 'never',
    'font-weight-notation': 'numeric',
    'function-url-quotes': 'always',
    'function-whitelist': [
      'translate',
      'calc',
      'rotate',
      'scale',
      'rgba',
      'rem',
      'border',
      'url',
      'invert',
      'lighten',
      'tint',
      'shade',
      'linear-gradient',
      'format',
      'counter',
      'percentage',
      'attr',
      'cubic-bezier',
      'translate3d',
      'rgb',
      'local',
      'repeat',
      'grayscale',
      'radial-gradient',

      //Those two functions are custom of this project
      'em',
      'z',
    ],
    'number-max-precision': 6,
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-whitelist': ['px', 'em', 'rem', '%', 's', 'deg', 'vw', 'vh', 'fr'],
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'property-case': 'lower',
    'property-no-vendor-prefix': true,
    'declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true, // override to not allow any duplicate value at all
    'declaration-block-no-redundant-longhand-properties': true,
    'selector-attribute-quotes': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-max-compound-selectors': 3,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-type-case': 'lower',
    'selector-max-empty-lines': 0,
    'media-feature-name-case': 'lower',
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-name-case': 'lower',
    'at-rule-no-vendor-prefix': true,
    'at-rule-whitelist': [
      'function',
      'if',
      'include',
      'import',
      'keyframes',
      'mixin',
      'media',
      'font-face',
      'extend',
      'return',
      'for',
      'each',
      'supports',
    ],
    'max-empty-lines': 2,
    'max-nesting-depth': 3,
    'no-eol-whitespace': true,
    'no-unknown-animations': true,

    'scss/dollar-variable-pattern': /^[a-z0-9]+([A-Z0-9]+[a-z0-9]*)*$/,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/selector-no-redundant-nesting-selector': true,

    /* Override `at-rule-no-unknown` to apply it with sass mixins */
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};