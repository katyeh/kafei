import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPhoto } from "../../store/actions/photoActions";
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import ImageModal from './ImageModal';

const AddImageBtn = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user);

  const updateImageUrl = (e) => {
    setImageUrl(e.target.files[0]);
    console.log("HEY")
    debugger
    setIsOpen(true);
    console.log(isOpen)
  };

  const onUpload = async (e) => {
    e.preventDefault();
    if (user) {
      let formData = new FormData();
      formData.append('pic_url', imageUrl);
      formData.append('user_id', user.id);

      await dispatch(uploadPhoto(formData, user.id));
      setIsOpen(false);
    }
}

  return (
    <form onSubmit={onUpload}>
      <div className="gallery__btn">
        <div className="file_input_wrap">
          <input
            type="file"
            name="pic_url"
            id="file_input"
            onChange={updateImageUrl}
            class="hide"
          />
          <label for="file_input" className="gallery__add-image-btn">
            <PhotoSizeSelectActualIcon
              style={{ fontSize: 30 }}
              component={svgProps => (
                <svg {...svgProps}>
                  <defs>
                    <linearGradient id="gradient1">
                      <stop offset="30%" stopColor={blue[400]} />
                      <stop offset="70%" stopColor={red[400]} />
                    </linearGradient>
                  </defs>
                  {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
                </svg>
              )}
            />
          <span className="gallery__btn-span">Add Image</span>
          </label>
        </div>
        <div className="img_preview_wrap">
          <img src="" id="imagePreview" alt="Preview Image" width="200px" class="hide" />
        </div>
      </div>

      {isOpen ?
          <div className="modal">
            <section className="modal-main">
              <button onClick={() => setIsOpen(false)}>close</button>
              <h1>HEYYYYY</h1>
              <button type="submit">Post photo</button>
            </section>
          </div>
          :
          ""
      }

    </form>
  )
}

export default AddImageBtn;
