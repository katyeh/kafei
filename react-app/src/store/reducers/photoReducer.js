export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const GET_PHOTOS = 'GET_PHOTOS';

const photoReducer = (state = [], action) => {
  switch(action.type) {
    case UPLOAD_PHOTO:
      return {
        ...state,
        id: action.id,
        pic_url: action.pic_url,
        user_id: action.user_id,
      }
    case GET_PHOTOS:
      return {photos: action.photos}
    default:
      return state;
  }
}

export default photoReducer;
