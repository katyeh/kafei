export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const GET_PHOTOS = 'GET_PHOTOS';

const photoReducer = (state = [], action) => {
  switch(action.type) {
    case UPLOAD_PHOTO:
      return [
        action.photo,
        ...state
      ]
    case GET_PHOTOS:
      // return {photos: action.photos}
      return action.photos
    default:
      return state;
  }
}

export default photoReducer;
