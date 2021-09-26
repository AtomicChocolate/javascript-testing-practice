function isNumber(value) {
    return !isNaN(value);
}

function isUpperCase(string) {
    return string === string.toUpperCase();
}

function convertLetterToNumber(string) {
    let result = string.toLowerCase().charCodeAt(0) - 96;
    if (result < 1 || result > 26) { //Do not change symbols
        result = string;
    }
    return result;
}

function convertNumberToLetter(number) {
    return String.fromCharCode(number + 96);
}

function caesar(string, shift) {
    let shiftedString = "";
    for (let i = 0; i < string.length; i++) {
        let shiftingLetter = string[i]
        shiftingLetter = convertLetterToNumber(shiftingLetter);
        if (isNumber(shiftingLetter)) {
            shiftingLetter = convertNumberToLetter((shiftingLetter + shift) % 26);
            if (isUpperCase(string[i])) { //Change back to uppercase
                shiftingLetter = shiftingLetter.toUpperCase();
            }
        }
        shiftedString += shiftingLetter;
    }
    return shiftedString;
}
module.exports = caesar;