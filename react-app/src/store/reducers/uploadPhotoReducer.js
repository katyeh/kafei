export const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

const photoReducer = (state = {}, action) => {
  switch(action.type) {
    case UPLOAD_PHOTO:
      return {
        ...state,
        id: action.id,
        newImageUrl: action.pic_url,
        user_id: action.User_id,
      }
    default:
      return state;
  }
}

export default photoReducer;
