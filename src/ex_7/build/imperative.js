"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumericListImperative = /** @class */ (function () {
    function NumericListImperative(unfiltedList) {
        this.list = [];
        for (var i = 0; i < unfiltedList.length; i++) {
            if (typeof unfiltedList[i] === "number" && !isNaN(unfiltedList[i])) {
                this.list.push(unfiltedList[i]);
            }
        }
    }
    Object.defineProperty(NumericListImperative.prototype, "smallest", {
        get: function () {
            var smallest = Number.MAX_VALUE;
            for (var i = 0; i < this.list.length; i++) {
                smallest = this.list[i] < smallest ? this.list[i] : smallest;
            }
            return smallest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericListImperative.prototype, "largest", {
        get: function () {
            var largest = Number.MIN_VALUE;
            for (var i = 0; i < this.list.length; i++) {
                largest = this.list[i] > largest ? this.list[i] : largest;
            }
            return largest;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericListImperative.prototype, "sum", {
        get: function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i];
            }
            return sum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericListImperative.prototype, "average", {
        get: function () {
            return this.sum / this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumericListImperative.prototype, "smallestLargestAverage", {
        get: function () {
            return [this.smallest, this.largest, this.average];
        },
        enumerable: false,
        configurable: true
    });
    return NumericListImperative;
}());
exports.default = NumericListImperative;
