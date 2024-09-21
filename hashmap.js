/*
 Example of a hashmap (hashtable) using Map() constructor
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map
*/
const map = new Map();
const nums = [1,2,3];

for(i = 0; i < nums.length; i++) {
  map.set(nums[i], i);
}

console.log(map);

//console.log(map.keys()); // get keys

// Check if map has a certain key
// if(map.has(2)) {
//   console.log(true);
// }else {
//   console.log(false);
// }