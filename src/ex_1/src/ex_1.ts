export class vowelCounter {
  private static VOWELS: string[] = ["a", "e", "i", "o", "u"]

  static countVowels(str: string): number {
    const lowerCaseLetters = str.toLowerCase().split("")
    const vowelsInString = lowerCaseLetters.filter((letter) => this.VOWELS.includes(letter))
    return vowelsInString.length
  }
}
