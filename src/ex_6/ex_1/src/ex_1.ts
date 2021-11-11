export class VowelCounter {
  static readonly VOWELS: string[] = ["a", "e", "i", "o", "u"]

  /**
   * retorna o número de vogais em uma string.
   *
   * @param string - string a ser analisada
   * @returns número de vogais
   */
  static count(string: string): number {
    const lowerCaseLetters: string[] = string.toLowerCase().split("")
    const vowelsInString: string[] = lowerCaseLetters.filter((letter: string) => this.VOWELS.includes(letter))
    return vowelsInString.length
  }
}
