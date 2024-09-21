/*
  Array data structure
  An array is a collection of items stored at contiguous memory locations
  Each item can be accessed using its index position number starting a 0;
*/
const letters = ['c','d','a','b'];

console.log(letters[2]) // access a in array
console.log(letters.toSorted()) // sort and copy the array

// Loop over array items using for loop
for(i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// forEach loop
letters.forEach((letter, index) => console.log(letter, index));