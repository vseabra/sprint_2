"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scientists = void 0;
class Scientists {
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
    getFieldById(id, field) {
        const scientist = this.scientists.find((scientist) => scientist.id === id);
        if (scientist) {
            return scientist[field];
        }
        else {
            return undefined;
        }
    }
    /**
     * sobescreve a propriedade privada "scientists", sobescrevendo o scientista com o id especificado com o update
     *
     * @param id - o id do scientista
     * @param update - o update que será aplicado ao scientista
     * @returns void
     */
    updateById(id, update) {
        const scientistToUpdate = this.scientists.find((scientist) => scientist.id === id);
        if (scientistToUpdate) {
            const updatedScientist = { ...scientistToUpdate, ...update };
            this.scientists = this.scientists.map((scientist) => scientist.id === id ? updatedScientist : scientist);
        }
    }
    /**
     * sobscreve a propriedade privada "scientists", removendo o scientista com o id especificado
     *
     * @param id - o id do scientista
     * @returns void
     */
    deleteById(id) {
        this.scientists = this.scientists.filter((scientist) => scientist.id !== id);
    }
}
exports.Scientists = Scientists;
