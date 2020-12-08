import { UPLOAD_PHOTO, GET_PHOTOS } from "../reducers/photoReducer";

export const uploadPhoto = (formData, id, name) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/photos`, {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        const data= await res.json();

        dispatch({
          type: UPLOAD_PHOTO,
          ...data
        })
        return data;
      }
      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export const getPhotos = (id) => {
  debugger
  return async (dispatch) => {
    try {
      const res = await fetch(`/api/users/${id}/photos`);
      const photos = await res.json();
      if (res.ok) {
        return dispatch({type: GET_PHOTOS, ...photos});
      }
    } catch(e) {
      console.log(e);
    }
  }
}
