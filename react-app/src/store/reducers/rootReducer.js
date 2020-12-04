import { combineReducers } from 'redux';
import user from './signupReducer';
import userReducer from './user';
import currentUserReducer from './currentUser';
import errors from './errorReducer';
import followers from './followerReducer';

const rootReducer = combineReducers({
  user,
  errors,
  followers,
  users: userReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
