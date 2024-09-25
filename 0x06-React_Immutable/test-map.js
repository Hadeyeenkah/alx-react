// test-map.js
import getImmutableObject from './1-map.js';  // Import the function from 1-map.js

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

const immutableObj = getImmutableObject(obj);  // Convert the object to an immutable Map
console.log(immutableObj);  // Print the result to verify

