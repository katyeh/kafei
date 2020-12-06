import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const UploadPhotoForm = () => {
  let newPhotoId;

  const [picUrl, setPicUrl] = useState("");
  const user = useSelector(state => state.user);

  const updateImageUrl = (e) => {
    setPicUrl(e.target.files[0]);
  };

  const onUpload = async (e) => {
    e.preventDefault();
    if (user) {
      let image = new FormData();
      image.append('user_id', user.id);
      image.append('pic_url', pic_url);

      image = await dispatchEvent(uploadNewPhoto(photo))
      newPhotoId = user.id + 10

    }
  }

  return (
    <form onSubmit={onUpload}>
      <label>Image</label>
      <input
        type="file"
        id="file_input"
        onChange={updateImageUrl}
      />
      <p>Please select a file</p>
      <button type="submit">Upload</button>
    </form>
  )
}

export default UploadPhotoForm;
