// 0-fromjs.test.js
const getImmutableObject = require('./0-fromjs');
const { Map } = require('immutable');

describe('getImmutableObject', () => {
    it('should convert a plain object to an Immutable Map', () => {
        const obj = {
            fear: true,
            smell: -1033575916.9145899,
            wall: false,
            thing: -914767132
        };
        const immutableObj = getImmutableObject(obj);
        expect(immutableObj).toEqual(Map({
            fear: true,
            smell: -1033575916.9145899,
            wall: false,
            thing: -914767132
        }));
    });
});

