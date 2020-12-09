export const MAKE_POST = 'MAKE_POST';
export const GET_POSTS = 'GET_POSTS';
export const DELETE_POST = 'DELETE_POSTS';

const postReducer = (state = [], action) => {
  switch(action.type) {
    case MAKE_POST:
      return [
        action.post,
        ...state
      ]
    case GET_POSTS:
      // return { ...state, posts: action.posts }
      return action.posts // For an array
    case DELETE_POST:
      return state.filter((post) => {
        return post.id !== action.id
      });
    default:
      return state;
  }
}

export default postReducer;
