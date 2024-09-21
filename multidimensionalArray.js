/*
  Multidimensional Arrays
  Arrays stored within an array
*/
const numbers = [
  [1,2,3],
  [4,5,6]
]

console.log(numbers); // logs entire array
// console.log(numbers[0]); // logs first array
// console.log(numbers[1]); // logs second array

// loop first array 
for(i = 0; i < numbers.length; i ++) {
  //console.log(numbers[i], i);
}

// get the values from the first nested array
for(j = 0; j < numbers[0].length; j++) {
  //console.log(numbers[0][j], j)
}

// get the values from the second nested array
for(h = 0; h < numbers[1].length; h++) {
  //console.log(numbers[1][h], h)
}

