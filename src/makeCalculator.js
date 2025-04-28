'use strict';

/**
 * @return {object}
 */
  function makeCalculator() {
    let result = 0;
  
    const calculator = {
      result: 0,
  
      add: function (value) {
        result += value;
        this.result = result;
        return this; // Enable method chaining
      },
      subtract: function (value) {
        result -= value;
        this.result = result;
        return this; // Enable method chaining
      },
      multiply: function (value) {
        result *= value;
        this.result = result;
        return this; // Enable method chaining
      },
      divide: function (value) {
        if (value === 0) {
          throw new Error("Cannot divide by zero");
        }
        result /= value;
        this.result = result;
        return this; // Enable method chaining
      },
  
      operate: function (callback, value) {
        result = callback(result, value);
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
