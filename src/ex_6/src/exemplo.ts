import { Person } from "./types"
import { Scientists } from "./main"
import { ScientistsImperative } from "./impertative"

/**
 * exemplos de uso. 
 */

const personList: Person[] = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
]

const imperative: ScientistsImperative = new ScientistsImperative(personList)
const functional: Scientists = new Scientists(personList)

console.log(functional.getFieldbyId(1, "name")) // ada lovelace
console.log(imperative.getFieldbyId(1, "name")) // ada lovelace

functional.updateById(1, {name:"novo nome"})
imperative.updateById(1, {name:"novo nome"})

console.log(functional.getFieldbyId(1, "name")) // novo nome
console.log(imperative.getFieldbyId(1, "name")) // novo nome

functional.deleteById(1)
imperative.deleteById(1)

console.log(functional.getFieldbyId(1, "name")) // undefined
console.log(imperative.getFieldbyId(1, "name")) // undefined
