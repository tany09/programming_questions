// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//Iterative solution
// function steps(n) {
//     let str = '';
//     for (let i= 0; i<n; i++) {
//         for (let j=0; j<=i; j++) {
//             str = str + '#';
//         }
//         for (let j=n-1; j>i; j--) {
//             str = str + ' ';
//         }
//         console.log(str);
//         str = '';
//     }
// }

//Recursive solution

function steps (n, row =0, str = '') {
    if (n === row) {
        return;
    }

    if (n === str.length) {
        console.log(str);
        return steps(n, row + 1);
    }

    if (str.length <= row) {
        str += '#';
    } else {
        str += ' ';
    }
    return steps (n, row, str);
}


module.exports = steps;
