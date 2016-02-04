# eslint-config-bullhorn

This package provides Bullhorns's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-bullhorn

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"extends": "bullhorn"` to your .eslintrc

### eslint-config-bullhorn/base

Lints ES6+. Requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"extends": "bullhorn/base"` to your .eslintrc

### eslint-config-bullhorn/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"extends": "bullhorn/legacy"` to your .eslintrc

### eslint-config-bullhorn/angular2

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-bullhorn eslint`
2. add `"extends": "bullhorn/angular2"` to your .eslintrc

See [Bullhorns's Javascript styleguide](https://github.com/bullhorn/standards-code-style) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.