export const MAKE_POST = 'MAKE_POST';
export const GET_POSTS = 'GET_POSTS';
export const DELETE_POST = 'DELETE_POSTS';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case MAKE_POST:
      return {
        ...state,
        id: action.id,
        body: action.body,
        user_id: action.user_id
      }
    case GET_POSTS:
      // return { ...state, posts: action.posts }
      return action.posts // For an array
    case DELETE_POST:
      return action.posts
    default:
      return state;
  }
}

export default postReducer;
