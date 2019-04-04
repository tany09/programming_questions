// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const length = str.length;
//     const temp = Array(length).fill().map((element, index) => {
//         return str[index];
//     });
//     let newstr = '';
//     for(let i= temp.length - 1; i >= 0; i--) {
//         newstr = newstr + temp[i];
//     }
//     return newstr;
// }

function reverse(str) {
    const arr = str.split('');
    let rev = '';
    for(let char of str) {
        rev = char + rev;
    }
    return rev;
}


function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
console.log(reverse('apple'));

