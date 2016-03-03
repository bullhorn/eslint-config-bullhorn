module.exports = {
    extends: [
        'eslint-config-bullhorn/rules/best-practices',
        'eslint-config-bullhorn/rules/errors',
        'eslint-config-bullhorn/rules/globals',
        'eslint-config-bullhorn/rules/legacy',
        'eslint-config-bullhorn/rules/node',
        'eslint-config-bullhorn/rules/strict',
        'eslint-config-bullhorn/rules/style',
        'eslint-config-bullhorn/rules/variables'
    ],
    env: {
        'browser': true,
        'node': true,
        'amd': false,
        'mocha': false,
        'jasmine': false
    },
    ecmaFeatures: {},
    globals: {},
    rules: {}
};
