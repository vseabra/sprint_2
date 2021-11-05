import {Person, Update, Property} from "./types"

// não sou fã desse nome, mas fiquei sem idea.
class Scientists {
  private scientists: Person[]

  constructor(scientistList: Person[]) {
    this.scientists = scientistList
  }

  /**
   * retorna o campo: "id" | "name" | "bio" de um scientista com o id especifado ou undefined
   *
   * @param id - o id do scientista
   * @param field - o campo que se deseja retornar, pode ser "id" | "name" | "bio"
   * @returns o valor do campo especificado ou undefined
   */
  getFieldbyId(id: number, field: Property): number | string | undefined {
    const scientist = this.scientists.find((scientist: Person) => scientist.id === id)

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
  updateById(id: number, update: Update): void {
    const scientistToUpdate = this.scientists.find((scientist: Person) => scientist.id === id)

    if (!scientistToUpdate){
      return undefined
    }
    const updatedScientist = {...scientistToUpdate, ...update}
    this.scientists = this.scientists.map((scientist: Person) => scientist.id === id ? updatedScientist : scientist)
  }

  /**
   * sobscreve a propriedade privada "scientists", removendo o scientista com o id especificado
   *
   * @param id - o id do scientista
   * @returns void
   */
  deleteById(id: number): void {
    this.scientists = this.scientists.filter((scientist: Person) => scientist.id !== id)
  }
}

export {Scientists}
