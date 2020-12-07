export const MAKE_POST = 'MAKE_POST';

const postReducer = (state = {}, action) => {
  switch(action.type) {
    case MAKE_POST:
      return {
        ...state,
        id: action.id,
        body: action.body,
        user_id: action.user_id
      }
    default:
      return state;
  }
}

export default postReducer;
