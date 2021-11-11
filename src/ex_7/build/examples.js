"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./main"));
var imperative_1 = __importDefault(require("./imperative"));
var unfiltedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "não é um número", {}];
var numericList = new main_1.default(unfiltedList);
var numericListImperative = new imperative_1.default(unfiltedList);
console.log(numericList.smallestLargestAverage);
console.log(numericListImperative.smallestLargestAverage);
