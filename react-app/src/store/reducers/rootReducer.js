import { combineReducers } from 'redux';
import user from './signupReducer';
import userReducer from './user';
import currentUserReducer from './currentUser';
import errors from './errorReducer';
import photos from './photoReducer';
import posts from './postReducer';
import tips from './tipReducer';
import likes from './likeReducer';

const rootReducer = combineReducers({
  user,
  errors,
  photos,
  posts,
  tips,
  likes,
  users: userReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
