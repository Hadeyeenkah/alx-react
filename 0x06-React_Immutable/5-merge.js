// 5-merge.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  return List([...page1, ...page2]); // Spread the arrays and create a List
}

// Function to merge two objects into an Immutable List
export function mergeElements(page1, page2) {
  const mergedMap = Map(page1).merge(Map(page2)); // Merge objects into a Map
  return mergedMap.valueSeq().toList(); // Get values and convert to List
}

