"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScientistsImperative = void 0;
/**
 * basicamente a mesma coisa que a implementaçao em main.ts. Só que aqui os metodos modificam diretamente o campo
 * scientists. mas para quem usa a classe não faz diferença(as funções recembem os mesmos argumentos).
 */
class ScientistsImperative {
    constructor(scientistList) {
        this.scientists = scientistList;
    }
    /**
     * retorna o campo: "id" | "name" | "bio" de um scientista com o id especifado ou undefined
     *
     * @param id - o id do scientista
     * @param field - o campo que se deseja retornar, pode ser "id" | "name" | "bio"
     * @returns o valor do campo especificado ou undefined
     */
    getFieldbyId(id, field) {
        for (const scientist of this.scientists) {
            if (scientist.id === id) {
                return scientist[field];
            }
        }
        return undefined;
    }
    /**
     * altera a propriedade privada "scientists", sobescrevendo o scientista com o id especificado com o update
     *
     * @param id - o id do scientista
     * @param update - o update que será aplicado ao scientista
     * @returns void
     */
    updateById(id, update) {
        for (let i = 0; i < this.scientists.length; i++) {
            if (this.scientists[i].id === id) {
                this.scientists[i] = { ...this.scientists[i], ...update };
            }
        }
    }
    /**
     * sobscreve a propriedade privada "scientists", removendo o scientista com o id especificado
     *
     * @param id - o id do scientista
     * @returns void
     */
    deleteById(id) {
        for (let i = 0; i < this.scientists.length; i++) {
            if (this.scientists[i].id === id) {
                this.scientists.splice(i, 1);
            }
        }
    }
}
exports.ScientistsImperative = ScientistsImperative;
