// Import Immutable.js
const { fromJS } = require('immutable');

// Function to convert an object into an immutable Map
function getImmutableObject(object) {
    return fromJS(object);
}

// Example usage
const obj = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Get the immutable Map
const immutableMap = getImmutableObject(obj);

// Print each key-value pair
immutableMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

