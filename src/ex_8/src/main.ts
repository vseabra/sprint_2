import {
  Scientist,
  IPerson,
  Mathematician,
  ComputerScientist,
  Astronomer,
  Engineer,
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
   * Usa uma regex na bio para determinar a classe que sera instanciada. mas no momento todas as classes são essencialmente idênticas.
   * Também podem haver falsos positivos com o regex, por exemplo: fulano.bio = "fulano NÂO foi matématico" seria um matemático.
   * @param person - Iperson
   * @returns objeto que implementa a interface Iperson
   */
  public static createOne(person: IPerson): Scientist {
    const { id, name, bio } = person;

    // TODO talvez colocar esses regex como membro estático da classe que eles verificam?
    // então eu poderia fazer algo tipo: if classe.regex.test(bio) return new classe
    const mathematicianRegex = /matemátic[ao]/i;
    const computerScientistRegex = /cientista da computação/i;
    const astronomerRegex = /astrônom[oa]/i;
    const engineerRegex = /engenheir[oa]/i;

    if (mathematicianRegex.test(bio)) {
      return new Mathematician(id, name, bio);
    }
    if (computerScientistRegex.test(bio)) {
      return new ComputerScientist(id, name, bio);
    }
    if (astronomerRegex.test(bio)) {
      return new Astronomer(id, name, bio);
    }
    if (engineerRegex.test(bio)) {
      return new Engineer(id, name, bio);
    }
    return new Scientist(id, name, bio);
  }

  /**
   * cria e retorna um array de objetos que implementam a interface IPerson
   *
   * @param personList - um array de Iperson
   * @returns array de objetos que implementam a interface Iperson
   */
  public static createMany(personList: IPerson[]): Scientist[] {
    return personList.map((person: IPerson) => this.createOne(person));
  }
}

export { ScientistFactory, Scientist, IPerson };
