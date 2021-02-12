import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  logOutSuccess,
  signInError,
  signInSuccess,
  signUpError,
  signUpSuccess,
} from '../actions/authActions';

const initialState = { email: '' };

const userReducer = createReducer(initialState, {
  [signUpSuccess]: (_, { payload }) => ({ email: payload.email }),
  [signInSuccess]: (_, { payload }) => ({ email: payload.email }),
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logOutSuccess]: () => initialState,
});

const tokenReducer = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.idToken,
  [signInSuccess]: (_, { payload }) => payload.idToken,
  [logOutSuccess]: () => null,
});

const localIdReducer = createReducer(null, {
  [signUpSuccess]: (_, { payload }) => payload.localId,
  [signInSuccess]: (_, { payload }) => payload.localId,
  [logOutSuccess]: () => null,
});

const errorReducer = createReducer(null, {
  [signUpError]: (_, { payload }) => payload,
  [signInError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
  localId: localIdReducer,
});

export default authReducer;
