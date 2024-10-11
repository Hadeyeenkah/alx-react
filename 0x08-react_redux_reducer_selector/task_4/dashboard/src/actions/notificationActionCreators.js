// task_6/dashboard/src/actions/notificationActionCreators.js
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

// Binded action creators
export const boundMarkAsAread = (dispatch) => (index) => dispatch(markAsAread(index));
export const boundSetNotificationFilter = (dispatch) => (filter) => dispatch(setNotificationFilter(filter));

