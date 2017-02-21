var assert = require('assert'),
    vows = require('vows'),
    test1 = require('../');

vows.describe('test').addBatch({
  'When performing serious calculations': {
    topic: test1.performSeriousCalculations(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 8);
    }
  }
}).export(module);

