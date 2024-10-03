import { schema } from 'normalizr';

// Create a user entity
const user = new schema.Entity('users');

// Create a message entity with guid as the idAttribute
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Create a notification entity with author and context fields
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Export schema
export { user, message, notification };
