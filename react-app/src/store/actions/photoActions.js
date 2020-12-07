import { UPLOAD_PHOTO } from "../reducers/uploadPhotoReducer";

export const uploadPhoto = (formData, id) => {
  return async dispatch => {
    try {
      const res = await fetch(`/api/users/${id}/photos`, {
        method: 'POST',
        body: formData
      });

      return await res.json();
    } catch (e) {
      console.log(e);
    }
  }
}
