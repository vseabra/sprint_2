export class vowelCounter {
    static countVowels(str) {
        const lowerCaseLetters = str.toLowerCase().split("");
        const vowelsInString = lowerCaseLetters.filter((letter) => this.VOWELS.includes(letter));
        return vowelsInString.length;
    }
}
vowelCounter.VOWELS = ["a", "e", "i", "o", "u"];
