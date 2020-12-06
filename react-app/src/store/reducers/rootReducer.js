import { combineReducers } from 'redux';
import user from './signupReducer';
import userReducer from './user';
import currentUserReducer from './currentUser';
import errors from './errorReducer';
import followers from './followReducer';
import following from './followingReducer';

const rootReducer = combineReducers({
  user,
  errors,
  followers,
  following,
  users: userReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
