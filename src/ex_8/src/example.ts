import { PersonFactory, IPerson, Scientist } from "./main";

const people: IPerson[] = [
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

const scientists: Scientist[] = PersonFactory.createMany(people);
scientists.forEach((scientist: Scientist) =>
  console.log(`Nome: ${scientist.name} \nbio: ${scientist.bio}\n`)
);

console.log("O nome inventor da linguagem de programação ADA é: ");
console.log(
  scientists.find((scientist: Scientist) =>
    scientist.contribution.includes("linguagem de programação ADA")
  )?.name
);
