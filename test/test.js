var assert = require('assert'),
    vows = require('vows'),
    test1 = require('./test1');
    test2 = require('./test2');

vows.describe('tests').addBatch({
  'When performing test1': {
    topic: test1.test(2),
    'test is expected to pass': function (result) {
      assert.isNumber(result);
      //assert.equal(result, 5);
    }
  },
  /*
  'When performing test2': {
	    topic: test2.test(3),
	    'test is expected to fail': function (result) {
	      assert.isNumber(result);
	      assert.equal(result, 9); // expected result is 8
	    }
	  },
  */
  'When performing test2': {
	    topic: test2.test(3),
	    'test is expected to pass': function (result) {
	      assert.isNumber(result);
	      assert.equal(result, 8);
	    }
	  }
}).export(module);

