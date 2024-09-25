// 7-equality.js
import { is } from 'immutable';

// Function to check if two Maps are equal
export function areMapsEqual(map1, map2) {
  return is(map1, map2);
}

