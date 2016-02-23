module.exports = {
    'extends': [
        'eslint-config-bullhorn/base'
    ],
    'parser': 'babel-eslint',
    rules: {},
    'globals': {
        '$': true,
        '_': true,
        'System': true,
        'Promise': true,
        'jasmine': true,
        'element': true,
        'by': true,
        'describe': true,
        'beforeAll': true,
        'xdescribe': true,
        'beforeEach': true,
        'it': true,
        'xit': true,
        'browser': true,
        'expect': true
    }
};
