import { VowelCounter } from "./ex_1.js";
// exemplo de uso com a palavra recebida diretamente como parámetro
console.log(VowelCounter.count("exemplo"));
// exemplo de uso com a a palavra recebida por input em um form
const form = document.querySelector("#vowel-form");
const resultSpan = document.querySelector("#result-display");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.elements.namedItem("text-input");
    const vowelCount = VowelCounter.count(input.value);
    resultSpan.innerText = `${vowelCount} vogais`;
});
