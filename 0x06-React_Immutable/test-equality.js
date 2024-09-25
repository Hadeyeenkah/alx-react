// test-equality.js
import { areMapsEqual } from './7-equality.js';
import { Map } from 'immutable';

// Test data for areMapsEqual
const map1 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const map2 = new Map({
  firstName: 'Guillaume',
  lastName: 'Salva',
});

const map3 = new Map({
  firstName: 'John',
  lastName: 'Doe',
});

// Testing the function
console.log('map1 and map2 are equal:', areMapsEqual(map1, map2)); // Should return true
console.log('map1 and map3 are equal:', areMapsEqual(map1, map3)); // Should return false

