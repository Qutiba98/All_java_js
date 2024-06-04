// 1-Write a function to find the largest element in an array.

// function findLargestElement(array) {
//     if (array.length === 0) {
//       return null; 
//     }
  
//     let largestElement = array[0];
  
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > largestElement) {
//         largestElement = array[i]; 
//       }
//     }
//     return largestElement;
//   }
//   const numbers = [3, 5, 7, 2, 8, 10, 4];
//   console.log(findLargestElement(numbers)); 

// 2-Write a function to find the smallest element in an array.

// function findSmallestElement(array) {
//     if (array.length === 0) {
//       return null; 
//     }
//       let smallestElement = array[0];
//       for (let i = 1; i < array.length; i++) {
//       if (array[i] < smallestElement) {
//         smallestElement = array[i];  
//       }
//   }
//   return smallestElement;
//   }
//   const numbers2 = [3, 5, 7, 2, 8, 10, 4];
//   console.log(findSmallestElement(numbers2));  

// 3-Write a function to find the sum of all elements in an array.

// function findSumOfElements(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
// const numbers3 = [3, 5, 7, 2, 8, 10, 4];
// console.log(findSumOfElements(numbers3)); 


// 4-Write a function to find the average of all elements in an array.

// function findAverageOfElements(array) {
//     if (array.length === 0) {
//         return null; 
//     }

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }

//     let average = sum / array.length;

//     return average;
// }
// const numbers = [3, 5, 7, 2, 8, 10, 4];
// console.log(findAverageOfElements(numbers)); //  5.571428571428571

// 5-Write a function to find the median of all elements in an array.

// function findMedianOfElements(array) {
//     if (array.length === 0) {
//         return null; 
//     }

//     array.sort((a, b) => a - b);

//     const mid = Math.floor(array.length / 2);

//     if (array.length % 2 === 0) {
//         return (array[mid - 1] + array[mid]) / 2;
//     } else {
//         return array[mid];
//     }
// }

// const numbers = [3, 5, 7, 2, 8, 10, 4];
// console.log(findMedianOfElements(numbers)); //  5


// 6-Write a function to remove all duplicates from an array.

function removeDuplicates(array) {
    const uniqueSet = new Set(array);

    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}
const numbersWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(numbersWithDuplicates)); // Output: [1, 2, 3, 4, 5]


// 7-Write a function to sort an array in ascending order.

// function sortArrayAscending(array) {
//     return array.sort((a, b) => a - b);
// }

// const unsortedArray = [3, 1, 5, 2, 4];
// console.log(sortArrayAscending(unsortedArray)); // Output: [1, 2, 3, 4, 5]


// 8-Write a function to sort an array in descending order.


function sortArrayDescending(array) {
    return array.sort((a, b) => b - a);
}

const unsortedArray = [3, 1, 5, 2, 4];
console.log(sortArrayDescending(unsortedArray)); // Output: [5, 4, 3, 2, 1]



// 9-Write a function to shuffle the elements of an array randomly.

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}
const originalArray = [1, 2, 3, 4, 5];
console.log(shuffleArray(originalArray)); // Output: Randomly shuffled array
