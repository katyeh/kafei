export const GET_LIKES = 'GET_LIKES';
export const ADD_LIKE_TO_POST = 'ADD_LIKE_TO_POST';
export const DELETE_LIKE = 'DELETE_LIKE';

const likeReducer = (state = [], action) => {
  switch(action.type) {
    case GET_LIKES:
      return action.likes
    case ADD_LIKE_TO_POST:
      return [
        action.like,
        ...state
      ]
    case DELETE_LIKE:
      return state.filter(like => {
        return like.id !== action.id
      });
    default:
      return state;
  };
};

export default likeReducer;
