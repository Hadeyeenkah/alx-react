// test-nested.js
import accessImmutableObject from './2-nested.js';

const object = {
  name: {
    first: "Guillaume",
    last: "Salva"
  }
};

console.log(accessImmutableObject(object, ['name', 'first']));  // Should return "Guillaume"
console.log(accessImmutableObject(object, ['name', 'last']));   // Should return "Salva"
console.log(accessImmutableObject(object, ['name', 'middle'])); // Should return undefined (key doesn't exist)

