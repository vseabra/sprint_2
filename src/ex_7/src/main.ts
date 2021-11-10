export class NumericList {
  public readonly list: number[]

  constructor(unfiltedList: any[]) {
    this.list = this.sanitize(unfiltedList)
  }

  /**
   * sanitiza uma lista arbitrária, isto é, retorna uma nova lista com apenas os valores numéricos
   *
   * @param list - lista que contém valores arbitrários a serem sanitizados
   * @returns lista com apenas os valores numéricos
   */
  private sanitize(list: any[]): number[] {
    return list
      .filter((item: any) => typeof item === "number")
      .filter((number: number) => !isNaN(number))
  }

  /**
   * retorna o menor valor da lista
   *
   * @returns o menor valor da lista
   */
  public get smallest(): number {
    return Math.min(...this.list)
  }

  /** retorna o maior valor da lista
   * 
   * @returns o maior valor da lista
   */
  public get largest(): number {
    return Math.max(...this.list)
  }

  /** retorna a soma de todos os valores da lista
   * .
   * @returns a soma de todos os valores da lista
   */
  public get sum(): number {
    return this.list.reduce((accumulator, current) => accumulator + current)
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
   * @returns uma lista que contém, em ordem: o menor valor, o maior valor e a média atitmetica de todos os valores da lista
   */
  public get smallestLargestAverage(): number[] {
    return [this.smallest, this.largest, this.average]
  }
}

