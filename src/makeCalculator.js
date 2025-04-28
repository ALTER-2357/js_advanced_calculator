'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  let result = 0;

  const calculator = {
    result: 0,

    add: (value) => result + value,
    subtract: (value) => result - value,
    multiply: (value) => result * value,
    divide: (value) => {
      if (value === 0) {
        throw new Error("Cannot divide by zero");
      }
      return result / value;
    },

    operate: function (callback, value) {
      result = callback(value);
      this.result = result;
      return this; // Enable method chaining
    },

    reset: function () {
      result = 0;
      this.result = result;
      return this; // Enable method chaining
    }
  };

  return calculator;
}


module.exports = makeCalculator;
