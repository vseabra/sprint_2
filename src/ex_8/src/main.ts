import {
  Scientist,
  IPerson,
  Mathematician,
  ComputerScientist,
  Astronomer,
  Engineer,
  ScientistType,
} from "./types";

/**
 * contém metodos estáticos para criar objetos que implementem a interface Iperson e extendem a classe Scientist
 *
 * @remarks
 * essa classe cria objetos que extendem a classe `Scientist` e implementam a interface `IPerson`.
 * mas no momento esses classes não tem nenhum método unico a elas, na verdade elas são essencialmente um nome diferente para Scientist
 */
class ScientistFactory {
  /**
   * cria e retorna um objeto que implementa a interface IPerson
   *
   * @remarks
   * @param type = o tipo de objeto a ser criado
   * @param person - Iperson
   * @returns objeto que implementa a interface Iperson
   */
  public static createOne(person: IPerson, type: ScientistType): Scientist {
    const { id, name, bio } = person;

    switch (type) {
    case ScientistType.Mathematician: {
      return new Mathematician(id, name, bio);
    }
    case ScientistType.Engineer: {
      return new Engineer(id, name, bio);
    }
    case ScientistType.ComputerScientist: {
      return new ComputerScientist(id, name, bio);
    }
    case ScientistType.Astronomer: {
      return new Astronomer(id, name, bio);
    }

    }

  }
}

export { ScientistFactory, Scientist, IPerson };
