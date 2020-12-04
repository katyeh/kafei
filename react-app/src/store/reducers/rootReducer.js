import { combineReducers } from 'redux';
import user from './signupReducer';
import userReducer from './userReducer';
import currentUserReducer from './currentUser';

const rootReducer = combineReducers({
  user,
  users: userReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
