export class NumericListImperative {
  public readonly list: number[] = []

  constructor(unfilteredList: any[]) {
    this.list = this.sanitize(unfilteredList)
  }

  /**
   * sanitiza uma lista arbitrária, isto é, retorna uma nova lista com apenas os valores numéricos
   *
   * @param list - lista que contém valores arbitrários a serem sanitizados
   * @returns lista com apenas os valores numéricos
   */
  private sanitize(unfilteredList: any[]): number[] {
    const sanitizedList: number[] = []

    for (const item of unfilteredList) {
      if (typeof item === "number" && !isNaN(item)) {
        sanitizedList.push(item)
      }
    }
    return sanitizedList
  }

  /**
   * retorna o menor valor da lista
   *
   * @returns o menor valor da lista
   */
  public get smallest(): number {
    let smallest: number = Number.MAX_VALUE

    for (const number of this.list) {
      smallest = number < smallest ? number : smallest
    }
    return smallest
  }

  /** retorna o maior valor da lista
   * 
   * @returns o maior valor da lista
   */
  public get largest(): number {
    let largest: number = Number.MIN_VALUE

    for (const number of this.list) {
      largest = number > largest ? number : largest
    }
    return largest
  }

  /** retorna a soma de todos os valores da lista
   * .
   * @returns a soma de todos os valores da lista
   */
  public get sum(): number {
    let sum: number = 0

    for (const number of this.list) {
      sum += number
    }
    return sum
  }

  /** retorna a média aritimetica dos valores da lista
   * .
   *
   * @returns a média aritimetica dos valores da lista
   */
  public get average(): number {
    return this.sum / this.list.length
  }

  /** retorna uma lista que contém, em ordem: o menor valor, o maior valor e a média atitmetica de todos os valores da lista
   * .
   * @returns uma lista que contém o menor valor, o maior valor e a média atitmetica de todos os valores da lista
   */
  public get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

