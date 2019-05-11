namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LetterValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}