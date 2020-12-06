import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPhoto } from "../store/actions/photoActions";

const UploadPhotoForm = () => {
  let newPhotoId;
  const dispatch = useDispatch();

  const [photoUrl, setPhotoUrl] = useState("");
  const user = useSelector(state => state.user);

  const updatePhotoUrl = (e) => {
    setPhotoUrl(e.target.files[0]);
  };

  const onUpload = async (e) => {
    e.preventDefault();
    if (user) {
      let photo = new FormData();
      photo.append('user_id', user.id);
      photo.append('pic_url', photoUrl);
      await dispatch(uploadPhoto(user.id, photo))
    }
  }

  return (
    <form onSubmit={onUpload}>
      <label>Photo</label>
      <input
        type="file"
        id="file_input"
        onChange={updatePhotoUrl}
        name="pic_url"
      />
      <p>Please select a file</p>
      <button type="submit">Upload</button>
    </form>
  )
}

export default UploadPhotoForm;
