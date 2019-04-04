// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunk = [];
//     for (let i=0; i < array.length; i = i + size) {
//         chunk.push(array.slice(i, i + size));
//     }
//     return chunk;
// }

// function chunk(array, size) {
//     let temp = [];
//     const chunked = [];
//     for(let i=0; i<=array.length; i++) {
//         if (temp.length === size || array[array.length - 1] === temp[temp.length - 1]) {
//             chunked.push(temp);
//             temp = [];
//             temp.push(array[i]);
//             console.log('temp pushed', temp)
//         }
//         else {
//             temp.push(array[i]);
//             console.log('chunked pushed',temp)
//         }
//     }
//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        // last refers to the chunked array. It does not make a copy of chunked array.
        const last = chunked[chunked.length - 1];
        
        if(!last || last.length === size) {
            chunked.push([element]);
        } 
        else {
            last.push(element);
        }
    }

    return chunked;
}

