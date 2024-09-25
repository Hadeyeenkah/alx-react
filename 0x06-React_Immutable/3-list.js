// 3-list.js
import { List } from 'immutable';

// Function to convert an array into an Immutable List
export function getListObject(array) {
  return List(array);
}

// Function to add an element to an existing Immutable List
export function addElementToList(list, element) {
  return list.push(element); // Append the element and return the new List
}

