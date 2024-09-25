// test-seq.js
import { printBestStudents } from './8-seq.js';

// Test data for printBestStudents
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 65,
    firstName: 'john',
    lastName: 'doe',
  },
  3: {
    score: 75,
    firstName: 'jane',
    lastName: 'smith',
  },
};

// Testing the function
printBestStudents(grades);

