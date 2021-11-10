export class NumericList {
  public readonly list: number[]

  constructor(unfiltedList: any[]) {
    this.list = this.sanitize(unfiltedList)
  }

  private sanitize(list: any[]): number[] {
    return list
      .filter((item: any) => typeof item === "number")
      .filter((number: number) => !isNaN(number))
  }

  public get smallest(): number {
    return Math.min(...this.list)
  }

  public get largest(): number {
    return Math.max(...this.list)
  }

  public get sum(): number {
    return this.list.reduce((accumulator, current) => accumulator + current)
  }

  public get average(): number {
    return this.sum / this.list.length
  }

  public get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

