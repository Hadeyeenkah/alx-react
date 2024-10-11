// task_5/dashboard/src/actions/notificationActionCreators.test.js
import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

test('markAsAread action creator', () => {
  const expectedAction = {
    type: MARK_AS_READ,
    index: 1,
  };
  expect(markAsAread(1)).toEqual(expectedAction);
});

test('setNotificationFilter action creator', () => {
  const expectedAction = {
    type: SET_TYPE_FILTER,
    filter: NotificationTypeFilters.DEFAULT,
  };
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
});

