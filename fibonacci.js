// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let fibonacci = [0,1];

//     for (let i=2; i<=n; i++) {
//         fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
//     }
//     return fibonacci[n];
// }

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if(cache[args]) {
            return cache[args];
        }

        let value = fn.apply(this, args);
        cache[args] = value;

        return value;
    }
}

function slowFib (n) {
    if(n<2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);



fib(5);