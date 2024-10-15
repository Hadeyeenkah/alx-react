// task_6/dashboard/src/actions/courseActionCreators.js
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Binded action creators
export const boundSelectCourse = (dispatch) => (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (dispatch) => (index) => dispatch(unSelectCourse(index));

