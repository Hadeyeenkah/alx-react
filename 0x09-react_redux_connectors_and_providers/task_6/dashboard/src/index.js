import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import uiReducer from './reducers/uiReducer';  // Import your uiReducer
import thunk from 'redux-thunk'; // Import redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'; // Optional for debugging
import rootReducer from './reducers';

const combinedReducer = combineReducers({
  root: rootReducer,
  ui: uiReducer
});
 
// Create store with redux-thunk middleware
const store = createStore(combinedReducer, applyMiddleware(thunk));

// Wrap App with the Provider and pass the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);