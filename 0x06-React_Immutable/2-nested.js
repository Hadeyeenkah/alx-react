// 2-nested.js
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain JavaScript object to an Immutable Map
  const immutableObject = fromJS(object);
  
  // Use getIn to access the value at the specified path (array)
  return immutableObject.getIn(array);
}

