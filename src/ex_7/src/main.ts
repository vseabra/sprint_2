class NumericList {
  readonly list: number[]

  constructor(unfiltedList: any[]) {
    this.list = unfiltedList
      .filter((item: any) => typeof item === "number")
      .filter((number) => !isNaN(number))
  }

  get smallest(): number {
    return Math.min(...this.list)
  }

  get largest(): number {
    return Math.max(...this.list)
  }

  get sum(): number {
    return this.list.reduce((accumulator, current) => accumulator + current)
  }

  get average(): number {
    return this.sum / this.list.length
  }

  get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

export default NumericList
