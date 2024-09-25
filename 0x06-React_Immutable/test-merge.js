// test-merge.js
import { concatElements, mergeElements } from './5-merge.js';

// Test data for concatElements
const array1 = ['apple', 'banana'];
const array2 = ['cherry', 'date'];

const concatenatedList = concatElements(array1, array2);
console.log('Concatenated List:', concatenatedList.toJS()); // Convert to JS for display

// Test data for mergeElements
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

const mergedList = mergeElements(object1, object2);
console.log('Merged List:', mergedList.toJS()); // Convert to JS for display

