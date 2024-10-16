// src/selectors/notificationSelector.js

import { createSelector } from 'reselect';

// Selector to get the filter type
export const filterTypeSelected = (state) => state.notifications.filter;

// Selector to get all notifications in Map format
export const getNotifications = (state) => state.notifications.list;

// Selector to get unread notifications (assuming there's an 'isRead' field)
export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter(notification => !notification.isRead)
);

