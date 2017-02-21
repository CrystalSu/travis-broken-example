var assert = require('assert'),
    vows = require('vows'),
    test1 = require('../');

vows.describe('test1').addBatch({
  'When performing serious calculations': {
    topic: test1.plus-one(4),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 5);
    }
  }
}).export(module);

