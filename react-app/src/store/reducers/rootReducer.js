import { combineReducers } from 'redux';
import user from './signupReducer';
import userReducer from './user';
import currentUserReducer from './currentUser';
import errors from './errorReducer';
import followers from './followReducer';
import following from './followingReducer';
import photos from './photoReducer';
import posts from './postReducer';
import tips from './tipReducer';

const rootReducer = combineReducers({
  user,
  errors,
  followers,
  following,
  photos,
  posts,
  tips,
  users: userReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
