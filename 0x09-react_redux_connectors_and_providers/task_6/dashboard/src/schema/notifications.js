import { normalize, schema } from 'normalizr';
import notificationsData from '../data/notifications.json';

// Define schemas (already defined)
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize data
const normalizedData = normalize(notificationsData, [notification]);

/**
 * getAllNotificationsByUser function:
 * This function retrieves all notifications for a specific user.
 * @param {string} userId - The ID of the user to retrieve notifications for.
 * @returns {Array} - List of notifications for the given user.
 */
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      messages.push(notifications[id]);
    }
  }

  return messages;
}
