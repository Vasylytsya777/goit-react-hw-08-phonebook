import axios from 'axios';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  logOutSuccess,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from '../actions/authActions';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpOperation = user => async dispatch => {
  dispatch(signUpRequest());
  try {
    const res = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });

    token.set(res.data.idToken);
    dispatch(signUpSuccess(res.data));
  } catch (error) {
    dispatch(signUpError(error));
  }
};

export const signInOperation = user => async dispatch => {
  dispatch(signInRequest());
  try {
    const res = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });

    token.set(res.data.idToken);
    dispatch(signInSuccess(res.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};

export const logOutOperation = () => async dispatch => {
  dispatch(logOutSuccess());
};

export const getUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistToken, localId },
  } = getState();

  if (!persistToken) return;
  token.set(persistToken);
  dispatch(getCurrentUserRequest());

  try {
    const res = await axios.post(
      `contacts/${localId}.json?auth=${persistToken}`,
      {},
    );
    dispatch(getCurrentUserSuccess(res.data));
  } catch (error) {
    dispatch(getCurrentUserError(error));
  }
};
