// 8-seq.js
import Immutable from 'immutable';

// Extract the Map and Seq functions from the imported Immutable object
const { Map, Seq } = Immutable;

// Function to print the names of students with a score >= 70
export function printBestStudents(grades) {
  // Convert the grades object to an Immutable Map
  const gradesMap = Map(grades);

  // Use Seq to iterate over the gradesMap
  Seq(gradesMap)
    .map(student => Map(student)) // Ensure each student is an Immutable Map
    .filter(student => student.get('score') >= 70) // Filter students with score >= 70
    .forEach(student => {
      // Capitalize first letter of firstName and lastName
      const firstName = student.get('firstName').charAt(0).toUpperCase() + student.get('firstName').slice(1);
      const lastName = student.get('lastName').charAt(0).toUpperCase() + student.get('lastName').slice(1);
      
      console.log(`${firstName} ${lastName}`); // Print the names
    });
}

