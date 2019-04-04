// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// //My solution
// function reverseInt(n) {
//     if(Math.sign(n) === 1) {
//         let revInt = '';

//         while (n > 0) {
//             let calc = parseInt(n % 10);
//             revInt = revInt + calc.toString();
//             n = parseInt(n / 10);
//         }
//         return parseInt(revInt);
//     }
//     else if (Math.sign(n) === -1) {
//         let revInt = '-';
//         n = Math.abs(n);
//         while(n > 0) {
//             let calc = parseInt(n % 10)
//             revInt = revInt + calc.toString();
//             n = parseInt(n / 10);
//         }
//         return parseInt(revInt);
//     }
//     else if (Math.sign(n) === 0) {
//         return n;
//     }
// }


function reverseInt (n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}
