interface IPerson {
  readonly id: number
  name: string
  bio: string
}

class Scientist implements IPerson {
  readonly id: number
  name: string
  bio: string

  constructor(id: number, name: string, bio: string) {
    this.id = id
    this.name = name
    this.bio = bio
  }

  get contribution() {
    // não faz muito sentido, mas eu queria que Scientist fosse um pouco diferente do Iperson normal.
    // talvez rescrever como um método normal, algo tipo: printContribution() ?
    return this.bio
  }
}

/**
 * contém metodos estáticos para criar objetos que implementem a interface Iperson.
 *
 * @remarks
 * Como na lista de exemplos todas as pessoas são cientistas essa classe sempre vai criar um cientista.
 * Se existissem outros tipos de pessoas essa classe deveria criar um objeto apropriado (que também implementaria Iperson).
 */
class PersonFactory {
  /**
   * cria e retorna um objeto que implementa a interface IPerson
   *
   * @remarks
   * Se existissem outros tipos de pessoas esse metódo deveria indentificar qual tipo de pessoa criar e criar o objeto apropriado
   * eu poderia descubir o tipo de pessoa com um regex na bio, procurando por inventor, matematico, etc. mas teriam possiveis falsos positivos.
   * @param person - Iperson
   * @returns objeto que implementa a interface Iperson
   */
  static createOne(person: IPerson): Scientist  {
    const { id, name, bio } = person
    return new Scientist(id, name, bio)
  }

  /**
   * cria e retorna um array de objetos que implementam a interface IPerson
   *
   * @param personList - um array de Iperson
   * @returns array de objetos que implementam a interface Iperson
   */
  static createMany(personList: IPerson[]): Scientist[] {
    return personList.map((person: IPerson) => this.createOne(person))
  }
}

export { PersonFactory, Scientist, IPerson }
