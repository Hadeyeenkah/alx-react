// test-list.js
import { getListObject, addElementToList } from './3-list.js';

// Convert an array to an immutable List
const list = getListObject([1, 2, 3]);
console.log(list);  // Should log List [1, 2, 3]

// Add a new element to the immutable List
const updatedList = addElementToList(list, 'newElement');
console.log(updatedList);  // Should log List [1, 2, 3, 'newElement']

