// Array Challenge Answes


//Challenge 1

// const arr = [1, 2, 3, 4, 5];

// arr.reverse();      // reverse the order of elements in the array
// arr.push(0);        // add 0 to the end of the array
// arr.unshift(6);     // add 6 to the beginning of the array

// console.log(arr);  

//Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Get the index of the duplicate 5 in arr2
const index = arr2.indexOf(5);

// Remove the duplicate 5 from arr2
arr2.splice(index, 1);

// Concatenate arr1 and arr2 into a new array arr3
const arr3 = arr1.concat(arr2);

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]