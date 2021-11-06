"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumericList = /** @class */ (function () {
    function NumericList(unfiltedList) {
        this.list = unfiltedList
            .filter(function (item) { return typeof item === "number"; })
            .filter(function (number) { return !isNaN(number); });
    }
    Object.defineProperty(NumericList.prototype, "smallest", {
        get: function () {
            return Math.min.apply(Math, this.list);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericList.prototype, "largest", {
        get: function () {
            return Math.max.apply(Math, this.list);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericList.prototype, "sum", {
        get: function () {
            return this.list.reduce(function (accumulator, current) { return accumulator + current; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericList.prototype, "average", {
        get: function () {
            return this.sum / this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericList.prototype, "smallestLargestAverage", {
        get: function () {
            return [this.smallest, this.largest, this.average];
        },
        enumerable: false,
        configurable: true
    });
    return NumericList;
}());
exports.default = NumericList;
