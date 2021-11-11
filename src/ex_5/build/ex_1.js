export class VowelCounter {
    /**
     * retorna o número de vogais em uma string.
     *
     * @param string - string a ser analisada
     * @returns número de vogais
     */
    static count(string) {
        const lowerCaseLetters = string.toLowerCase().split("");
        const vowelsInString = lowerCaseLetters.filter((letter) => this.VOWELS.includes(letter));
        return vowelsInString.length;
    }
}
VowelCounter.VOWELS = ["a", "e", "i", "o", "u"];
