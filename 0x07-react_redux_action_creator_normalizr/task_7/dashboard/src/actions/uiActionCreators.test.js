// task_7/dashboard/src/actions/uiActionCreators.test.js
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  loginRequest,
} from './uiActionCreators'; // Adjust the import path as necessary

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when the API returns a successful response', async () => {
    fetchMock.getOnce('/login-success.json', {
      body: { email: 'test@example.com' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com' } },
      { type: LOGIN_SUCCESS, user: { email: 'test@example.com' } },
    ];

    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when the API query fails', async () => {
    fetchMock.getOnce('/login-success.json', 500); // Simulate a server error

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com' } },
      { type: LOGIN_FAILURE },
    ];

    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

