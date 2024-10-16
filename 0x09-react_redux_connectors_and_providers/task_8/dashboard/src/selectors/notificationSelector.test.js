// src/selectors/notificationSelector.test.js

import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const state = {
    notifications: {
      filter: 'DEFAULT',
      list: [
        { id: 1, message: 'First notification', isRead: true },
        { id: 2, message: 'Second notification', isRead: false },
        { id: 3, message: 'Third notification', isRead: false }
      ]
    }
  };

  it('filterTypeSelected should return the filter type from the state', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications from the state', () => {
    const result = getNotifications(state);
    expect(result).toEqual(state.notifications.list);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(state);
    expect(result).toEqual([
      { id: 2, message: 'Second notification', isRead: false },
      { id: 3, message: 'Third notification', isRead: false }
    ]);
  });
});

