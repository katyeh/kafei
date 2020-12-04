export const LOAD_ERROR = 'LOAD_ALBUM';
export const CLEAR_ERRORS = 'CLEAR_ERROR';

const errorReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ERROR:
      return [action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorReducer;
