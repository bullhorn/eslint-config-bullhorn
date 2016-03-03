# eslint-config-bullhorn

This package provides Bullhorns's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-bullhorn

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"extends": "bullhorn"` to your .eslintrc

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.