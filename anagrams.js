// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     const charMap1 = {};
//     const charMap2 = {};
//     const newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     const newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     for(let char of newStringA) {
//         charMap1[char] = charMap1[char] + 1 || 1;
//     }
    
//     for(let char of newStringB) {
//         charMap2[char] = charMap2[char] + 1 || 1;
//     }

//     if(newStringA.length !== newStringB.length) {
//         return false;
//     }

//     //We can also compare the length of object keys
//     // if(Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//     //     return false;
//     // }

//     for (let char in charMap1) {
//         if(charMap1[char] !== charMap2[char]) {
//             return false;
//         }
//     }

//     return true;
// }


function anagrams (stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);

}

function cleanString (str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
