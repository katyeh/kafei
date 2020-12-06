import { UPLOAD_PHOTO } from "../reducers/uploadPhotoReducer";

export const uploadPhoto = (id, photo) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/photos`, {
        method: 'POST',
        body: photo
      });

      if (res.ok) {

        const data = await res.json()
        return dispatch({
          type: UPLOAD_PHOTO,
          ...data
        });
      }

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
