var assert = require('assert'),
    vows = require('vows'),
    test1 = require('./test1');

vows.describe('test').addBatch({
  'When performing test1': {
    topic: test1.test(2),
    'test should pass': function (result) {
      assert.isNumber(result);
      assert.equal(result, 5);
    }
  }
}).export(module);

