import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/phonebookActions';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const operationAddContact = contact => async (dispatch, getState) => {
  dispatch(addContactRequest());

  const {
    auth: { token: persistToken, localId },
  } = getState();

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/contacts/${localId}.json?auth=${persistToken}`,
      contact,
    );
    dispatch(addContactSuccess({ ...contact, id: res.data.name }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const operationGetContacts = () => async (dispatch, getState) => {
  dispatch(getContactsRequest());

  const {
    auth: { token: persistToken, localId },
  } = getState();

  if (!persistToken) return;
  token.set(persistToken);

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/contacts/${localId}.json?auth=${persistToken}`,
    );

    if (res.data) {
      const contacts = Object.keys(res.data).map(key => ({
        ...res.data[key],
        id: key,
      }));

      dispatch(getContactsSuccess(contacts));
    } else dispatch(getContactsSuccess([]));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const operationDeleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
