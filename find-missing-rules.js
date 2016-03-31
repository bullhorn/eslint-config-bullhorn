var fs = require('fs');
var difference = require('lodash.difference');
var concat = require('lodash.concat');

// Current Rules
var bestPractices = require('./rules/best-practices');
var errors = require('./rules/errors');
var es6 = require('./rules/es6');
var legacy = require('./rules/legacy');
var node = require('./rules/node');
var strict = require('./rules/strict');
var style = require('./rules/style');
var variables = require('./rules/variables');

var allRules = fs
    .readdirSync('./node_modules/eslint/lib/rules')
    .map(function removeJsFromFilename(filename) {
        return filename.replace(/\.js$/, '')
    });

var currentRules = concat([], Object.keys(bestPractices.rules), Object.keys(errors.rules),
    Object.keys(es6.rules), Object.keys(legacy.rules), Object.keys(node.rules), Object.keys(strict.rules),
    Object.keys(style.rules), Object.keys(variables.rules));

var missingRules = difference(allRules, currentRules);
console.log('Missing Rules: ' + missingRules.join(', '));
console.log('TOTAL: ' + missingRules.length);