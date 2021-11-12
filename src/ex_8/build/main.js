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
     * @param type = o tipo de objeto a ser criado
     * @param person - Iperson
     * @returns objeto que implementa a interface Iperson
     */
    static createOne(person, type) {
        const { id, name, bio } = person;
        switch (type) {
            case types_1.ScientistType.Mathematician: {
                return new types_1.Mathematician(id, name, bio);
            }
            case types_1.ScientistType.Engineer: {
                return new types_1.Engineer(id, name, bio);
            }
            case types_1.ScientistType.ComputerScientist: {
                return new types_1.ComputerScientist(id, name, bio);
            }
            case types_1.ScientistType.Astronomer: {
                return new types_1.Astronomer(id, name, bio);
            }
        }
    }
}
exports.ScientistFactory = ScientistFactory;
