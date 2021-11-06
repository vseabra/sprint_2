class NumericListImperative {
  readonly list: number[] = []

  constructor(unfiltedList: any[]) {
    for (let i: number = 0; i < unfiltedList.length; i++) {
      if (typeof unfiltedList[i] === "number" && !isNaN(unfiltedList[i])) {
        this.list.push(unfiltedList[i])
      }
    }
  }

  get smallest(): number {
    let smallest: number = Number.MAX_VALUE

    for (let i: number = 0; i < this.list.length; i++) {
      smallest = this.list[i] < smallest ? this.list[i] : smallest
    }
    return smallest
  }

  get largest(): number {
    let largest: number = Number.MIN_VALUE

    for (let i: number = 0; i < this.list.length; i++) {
      largest = this.list[i] > largest ? this.list[i] : largest
    }
    return largest
  }

  get sum(): number {
    let sum: number = 0

    for (let i: number = 0; i < this.list.length; i++) {
      sum += this.list[i]
    }
    return sum
  }

  get average(): number {
    return this.sum / this.list.length
  }

  get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

export default NumericListImperative
