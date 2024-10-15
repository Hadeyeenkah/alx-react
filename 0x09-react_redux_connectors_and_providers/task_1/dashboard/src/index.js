import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from 'redux';  // Import createStore from redux
import { Provider } from 'react-redux';  // Import Provider from react-redux
import uiReducer from './reducers/uiReducer';  // Import your uiReducer
import thunk from 'redux-thunk'; // Import redux-thunk


// Create store with redux-thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Create the Redux store and pass uiReducer
const store = createStore(uiReducer);

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