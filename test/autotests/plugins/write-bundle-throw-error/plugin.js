'use strict';

var fs = require('fs');

module.exports = function(lasso, config) {
    lasso.config.writer = {
        init (lassoContext) {
            throw new Error('Failed to initialize');
        },

        writeBundle (reader, lassoContext, callback) {
            const bundle = lassoContext.bundle;
            bundle.url = 'test.com';
            module.exports.counter.push('writeBundle');
            callback();
        }
    };
};

module.exports.counter = [];