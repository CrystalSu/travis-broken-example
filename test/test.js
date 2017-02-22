var assert = require('assert'),
    vows = require('vows'),
    test1 = require('./test1'),
    lib = require('../');

vows.describe('test').addBatch({
  'When performing serious calculations': {
    topic: lib.performSeriousCalculations(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 8);
    }
  }
}).export(module);

