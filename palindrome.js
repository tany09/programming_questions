// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const arr = str.split('');
//     const length = arr.length;
//     let pal = false;
//     for (let i = 0; i <= (length / 2) -1; i++) {
//         if(arr[i] === arr[length - i -1]) {
//             pal = true;
//         } else {
//             pal = false;
//             break;
//         }
//     }
//     return pal;
// }

function isPalindrome (str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    });
}

