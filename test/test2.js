var component2 = require('../lib/component2');

exports.test = function (x) {
  //
  // call the component to be tested
  //
  return component2.squareIt(x) - 1;
};

