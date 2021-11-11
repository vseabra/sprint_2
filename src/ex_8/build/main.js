"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scientist = exports.ScientistFactory = void 0;
const types_1 = require("./types");
Object.defineProperty(exports, "Scientist", { enumerable: true, get: function () { return types_1.Scientist; } });
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
    static createOne(person) {
        const { id, name, bio } = person;
        // TODO talvez colocar esses regex como membro estático da classe que eles verificam?
        // então eu poderia fazer algo tipo: if classe.regex.test(bio) return new classe
        const mathematicianRegex = /matemátic[ao]/i;
        const computerScientistRegex = /cientista da computação/i;
        const astronomerRegex = /astrônomo/i;
        const engineerRegex = /engenheir[oa]/i;
        if (mathematicianRegex.test(bio)) {
            return new types_1.Mathematician(id, name, bio);
        }
        if (computerScientistRegex.test(bio)) {
            return new types_1.ComputerScientist(id, name, bio);
        }
        if (astronomerRegex.test(bio)) {
            return new types_1.Astronomer(id, name, bio);
        }
        if (engineerRegex.test(bio)) {
            return new types_1.Engineer(id, name, bio);
        }
        return new types_1.Scientist(id, name, bio);
    }
    /**
     * cria e retorna um array de objetos que implementam a interface IPerson
     *
     * @param personList - um array de Iperson
     * @returns array de objetos que implementam a interface Iperson
     */
    static createMany(personList) {
        return personList.map((person) => this.createOne(person));
    }
}
exports.ScientistFactory = ScientistFactory;
