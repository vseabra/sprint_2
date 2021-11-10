export class NumericListImperative {
  public readonly list: number[] = []

  constructor(unfilteredList: any[]) {
    this.list = this.sanitize(unfilteredList)
  }

  private sanitize(unfilteredList: any[]): number[] {
    const sanitizedList: number[] = []

    for (const item of unfilteredList) {
      if (typeof item === "number" && !isNaN(item)) {
        sanitizedList.push(item)
      }
    }
    return sanitizedList
  }

  public get smallest(): number {
    let smallest: number = Number.MAX_VALUE

    for (const number of this.list) {
      smallest = number < smallest ? number : smallest
    }
    return smallest
  }

  public get largest(): number {
    let largest: number = Number.MIN_VALUE

    for (const number of this.list) {
      largest = number > largest ? number : largest
    }
    return largest
  }

  public get sum(): number {
    let sum: number = 0

    for (const number of this.list) {
      sum += number
    }
    return sum
  }

  public get average(): number {
    return this.sum / this.list.length
  }

  public get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

