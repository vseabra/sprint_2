import {IPerson, IUpdate, TProperty} from "./types"

class Scientists {
  private scientists: IPerson[]

  constructor(scientistList: IPerson[]) {
    this.scientists = scientistList
  }

  /**
   * retorna o campo: "id" | "name" | "bio" de um scientista com o id especifado ou undefined
   *
   * @param id - o id do scientista
   * @param field - o campo que se deseja retornar, pode ser "id" | "name" | "bio"
   * @returns o valor do campo especificado ou undefined
   */
  getFieldById(id: number, field: TProperty): number | string | undefined {
    const scientist: IPerson | undefined = this.scientists.find((scientist: IPerson) => scientist.id === id)

    if (scientist) {
      return scientist[field]
    } else {
      return undefined
    }
  }

  /**
   * sobescreve a propriedade privada "scientists", sobescrevendo o scientista com o id especificado com o update
   *
   * @param id - o id do scientista
   * @param update - o update que será aplicado ao scientista
   * @returns void
   */
  updateById(id: number, update: IUpdate): void {
    const scientistToUpdate: IPerson | undefined = this.scientists.find((scientist: IPerson) => scientist.id === id)

    if (scientistToUpdate){
      const updatedScientist: IPerson = {...scientistToUpdate, ...update}
      this.scientists = this.scientists.map((scientist: IPerson) => scientist.id === id ? updatedScientist : scientist)
    }
  }

  /**
   * sobscreve a propriedade privada "scientists", removendo o scientista com o id especificado
   *
   * @param id - o id do scientista
   * @returns void
   */
  deleteById(id: number): void {
    this.scientists = this.scientists.filter((scientist: IPerson) => scientist.id !== id)
  }
}

export {Scientists}
