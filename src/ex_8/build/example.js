"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const main_1 = require("./main");
const people = [
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
    {
        id: 5,
        name: "Jean Ichbiah",
        bio: "Jean Ichbiah foi um cientista da computação que inventou a linguagem de programação ADA",
    },
];
const adaLovelace = main_1.ScientistFactory.createOne(people[0], types_1.ScientistType.Mathematician);
const alanTuring = main_1.ScientistFactory.createOne(people[1], types_1.ScientistType.ComputerScientist);
const nikolaTelsta = main_1.ScientistFactory.createOne(people[2], types_1.ScientistType.Engineer);
const nicolauCopernico = main_1.ScientistFactory.createOne(people[3], types_1.ScientistType.Astronomer);
const jeanIchbiah = main_1.ScientistFactory.createOne(people[4], types_1.ScientistType.ComputerScientist);
const scientists = [adaLovelace, alanTuring, nikolaTelsta, nicolauCopernico, jeanIchbiah];
scientists.forEach((scientist) => console.log(`Nome: ${scientist.name} \nbio: ${scientist.bio}\n`));
console.log("O nome inventor da linguagem de programação ADA é: ");
console.log((_a = scientists.find((scientist) => scientist.contribution.includes("linguagem de programação ADA"))) === null || _a === void 0 ? void 0 : _a.name);
