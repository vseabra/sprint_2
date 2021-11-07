"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scientist = exports.PersonFactory = void 0;
var Scientist = /** @class */ (function () {
    function Scientist(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
    Object.defineProperty(Scientist.prototype, "contribution", {
        get: function () {
            // não faz muito sentido, mas eu queria que Scientist fosse um pouco diferente do Iperson normal.
            // talvez rescrever como um método normal, algo tipo: printContribution() ?
            return this.bio;
        },
        enumerable: false,
        configurable: true
    });
    return Scientist;
}());
exports.Scientist = Scientist;
/**
 * contém metodos estáticos para criar objetos que implementem a interface Iperson.
 *
 * @remarks
 * Como na lista de exemplos todas as pessoas são cientistas essa classe sempre vai criar um cientista.
 * Se existissem outros tipos de pessoas essa classe deveria criar um objeto apropriado (que também implementaria Iperson).
 */
var PersonFactory = /** @class */ (function () {
    function PersonFactory() {
    }
    /**
     * cria e retorna um objeto que implementa a interface IPerson
     *
     * @remarks
     * Se existissem outros tipos de pessoas esse metódo deveria indentificar qual tipo de pessoa criar e criar o objeto apropriado
     * eu poderia descubir o tipo de pessoa com um regex na bio, procurando por inventor, matematico, etc. mas teriam possiveis falsos positivos.
     * @param person - Iperson
     * @returns objeto que implementa a interface Iperson
     */
    PersonFactory.createOne = function (person) {
        var id = person.id, name = person.name, bio = person.bio;
        return new Scientist(id, name, bio);
    };
    /**
     * cria e retorna um array de objetos que implementam a interface IPerson
     *
     * @param personList - um array de Iperson
     * @returns array de objetos que implementam a interface Iperson
     */
    PersonFactory.createMany = function (personList) {
        var _this = this;
        return personList.map(function (person) { return _this.createOne(person); });
    };
    return PersonFactory;
}());
exports.PersonFactory = PersonFactory;
