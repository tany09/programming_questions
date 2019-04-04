// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charList = {};
    let max = 0;
    let charMax = '';

    for (let char of str) {
        charList[char] = charList[char] + 1 || 1;
    }

    for (let char in charList) {
        if (charList[char] > max) {
            max = charList[char];
            charMax = char;
        }
    }
    return charMax;
}
