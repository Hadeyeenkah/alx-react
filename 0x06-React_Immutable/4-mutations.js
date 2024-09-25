// 4-mutations.js
import { Map } from 'immutable';

// Create the initial immutable Map and export it as 'map'
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create a new map based on 'map' and update values at index 2 and 4
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

