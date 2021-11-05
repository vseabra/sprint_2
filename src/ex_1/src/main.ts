import { vowelCounter } from "./ex_1.js"

// exemplo de uso com a palavra recebida diretamente como parámetro
console.log(vowelCounter.countVowels("exemplo")) // printa 3 no console

// exemplo de uso com a a palavra recebida por input em um form

const form: HTMLFormElement = document.querySelector("#vowel-form") as HTMLFormElement
const resultSpan: HTMLSpanElement = document.querySelector("#result-display") as HTMLSpanElement

form.addEventListener("submit", (event: Event) => {
  event.preventDefault()
  const input: HTMLInputElement = form.elements.namedItem("text-input") as HTMLInputElement
  const vowelCount: number = vowelCounter.countVowels(input.value)

  resultSpan.innerText = `${vowelCount} vogais`
})
