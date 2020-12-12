import React, { useState } from 'react';
import { updateProfileImage } from '../../store/actions/currentUser';
import { useDispatch } from 'react-redux';

const ProfileImage = ({ user, currentUser, isProfile }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");

  const updateImageUrl = (e) => {
    setImageUrl(e.target.files[0]);
    // document.getElementById("form").submit()
  };

  const onUpload = async (e) => {
    e.preventDefault();
    if (currentUser) {
      let formData = new FormData();
      formData.append('profile_image_url', imageUrl)
      formData.append('user_id', user.id)

      await dispatch(updateProfileImage(formData, user.id))
    }
  }

  return (
    <form id="form" onSubmit={onUpload}>
      <div className="profile__img-div">
        <img src={currentUser.profile_image_url} alt="" className="profile__user-img"></img>
        <input
          type="file"
          name="profile_image_url"
          id="file_input"
          onChange={updateImageUrl}
          // className="hide"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default ProfileImage;
