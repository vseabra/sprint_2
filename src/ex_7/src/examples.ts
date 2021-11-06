import NumericList from "./main"
import NumericListImperative from "./imperative"

const unfiltedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "não é um número", {} ]

const numericList = new NumericList(unfiltedList)
const numericListImperative = new NumericListImperative(unfiltedList)

console.log(numericList.smallestLargestAverage) 
console.log(numericListImperative.smallestLargestAverage) 
