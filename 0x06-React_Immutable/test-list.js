// test-list.js
import { getListObject, addElementToList } from './3-list.js';

// Test data
const array = ['apple', 'banana', 'cherry'];
const list = getListObject(array);

console.log('Original List:', list.toJS()); // Convert Immutable List to JS array for display

// Add an element to the List
const updatedList = addElementToList(list, 'date');
console.log('Updated List:', updatedList.toJS()); // Convert back to JS array to view changes

