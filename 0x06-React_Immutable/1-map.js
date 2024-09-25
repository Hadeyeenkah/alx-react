// 1-map.js
import { Map } from 'immutable';  // Import Map from Immutable.js

// Function that converts a regular object into an immutable Map
function getImmutableObject(object) {
  return Map(object);  // Use Map to create an immutable object from the given object
}

export default getImmutableObject;  // Export the function for use in other files

