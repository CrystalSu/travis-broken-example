var component1 = require('component1');

exports.test = function (x) {
  //
  // call the component to be tested
  //
  return 1 + component1.doubleIt(x);
};

