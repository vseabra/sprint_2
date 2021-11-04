import { vowelCounter } from "./ex_1.js"

// exemplo de uso com a palavra recebida diretamente como parámetro
console.log(vowelCounter.countVowels("exemplo")) // printa 3 no console

// exemplo de uso com a a palavra recebida por input em um form

const form = document.querySelector("#vowel-form") as HTMLFormElement
const resultSpan = document.querySelector("#result-display") as HTMLSpanElement

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const input = form.elements.namedItem("text-input") as HTMLInputElement
  const vowelCount = vowelCounter.countVowels(input.value)

  resultSpan.innerText = `${vowelCount} vogais`
})
