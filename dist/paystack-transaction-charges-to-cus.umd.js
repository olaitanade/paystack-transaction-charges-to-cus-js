(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['paystack-transaction-charges-to-cus'] = {}));
}(this, (function (exports) { 'use strict';

    var DECIMAL_FEE = 0.0150;
    var FEE_CAP = 2000;
    var FLAT_FEE = 100;

    var calculateFor2500Below = function calculateFor2500Below(amount) {
      var applicableFees = DECIMAL_FEE * amount;

      if (applicableFees > FEE_CAP) {
        return amount + FEE_CAP;
      } else {
        return amount / (1 - DECIMAL_FEE) + 0.01;
      }
    };

    var calculateFor2500Above = function calculateFor2500Above(amount) {
      var applicableFees = DECIMAL_FEE * amount + FLAT_FEE;

      if (applicableFees > FEE_CAP) {
        return amount + FEE_CAP;
      } else {
        return (amount + FLAT_FEE) / (1 - DECIMAL_FEE) + 0.01;
      }
    };

    var calculateTotalPrice = function calculateTotalPrice(amount) {
      var amt = amount;

      if (amt < 100) {
        return Math.round(amt + 1);
      } else if (amt < 2500) {
        return Math.round(calculateFor2500Below(amt));
      } else {
        return Math.round(calculateFor2500Above(amt));
      }
    };

    exports.calculateTotalPrice = calculateTotalPrice;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
