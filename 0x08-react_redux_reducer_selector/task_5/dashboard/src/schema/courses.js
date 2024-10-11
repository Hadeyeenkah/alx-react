// task_4/dashboard/src/schema/courses.js

import { schema } from 'normalizr';

// Define the course schema
const course = new schema.Entity('courses');

// Create a normalizer function for courses
export const coursesNormalizer = (data) => {
  const normalizedData = {
    entities: {},
    result: [],
  };
  
  if (data) {
    normalizedData.entities = { courses: {} };
    normalizedData.result = data.map(item => item.id);
    
    data.forEach(item => {
      normalizedData.entities.courses[item.id] = item;
    });
  }
  
  return normalizedData;
};

