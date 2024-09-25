// test.js

// Import the getImmutableObject function from the 0-fromjs.js file
import getImmutableObject from './0-fromjs.js';

// Define a sample object
const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

// Call the function to convert the object into an Immutable object
const immutableObj = getImmutableObject(obj);

// Print the result to the console to verify the output
console.log(immutableObj);
