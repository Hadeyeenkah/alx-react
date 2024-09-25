// test-deeply.js
import { mergeDeeplyElements } from './6-deeply.js';

// Test data for mergeDeeplyElements
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

const mergedResult = mergeDeeplyElements(page1, page2);
console.log('Merged Result:', mergedResult.toJS()); // Convert to JS for display

