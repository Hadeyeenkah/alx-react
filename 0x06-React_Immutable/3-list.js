// 3-list.js
import { List } from 'immutable';

// Function to convert an array into an Immutable List
export function getListObject(array) {
  return List(array);  // Immutable.js List from the array
}

// Function to append an element to an Immutable List
export function addElementToList(list, element) {
  return list.push(element);  // Append the element to the list and return the new list
}

