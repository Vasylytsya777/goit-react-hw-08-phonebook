import { combineReducers } from 'redux';
import authReducer from './authReducer';
import phonebookReducer from './phonebookReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'localId'],
};

const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
