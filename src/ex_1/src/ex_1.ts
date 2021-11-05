export class vowelCounter {
  private static VOWELS: string[] = ["a", "e", "i", "o", "u"]

  /**
   * retorna o número de vogais em uma string.
   *
   * @param str - string a ser analisada
   * @returns número de vogais
   */
  static countVowels(str: string): number {
    const lowerCaseLetters: string[] = str.toLowerCase().split("")
    const vowelsInString: string[] = lowerCaseLetters.filter((letter: string) => this.VOWELS.includes(letter))
    return vowelsInString.length
  }
}
