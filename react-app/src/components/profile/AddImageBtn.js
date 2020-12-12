import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadPhoto } from "../../store/actions/photoActions";
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import CloseIcon from '@material-ui/icons/Close';

const AddImageBtn = () => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const user = useSelector(state => state.user);

  const updateImageUrl = (e) => {
    setImageUrl(e.target.files[0]);
    setIsOpen(true);

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
    }
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
            className="hide"
          />
          <label htmlFor="file_input" className="gallery__add-image-btn">
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
      </div>

      {isOpen ?
        <div className="modal">
          <section className="modal__main">
            <div className="modal__header">
              <div className="modal__label">Add Image</div>
              <div className="modal__close">
                <CloseIcon
                  style={{ fontSize: 30 }}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>

            <div className="modal__preview-wrap">
              <div className="modal__img-div">
                <img
                  className="modal__preview-img"
                  src={imagePreview}
                  id="imagePreview"
                  alt="Preview Image"
                />
              </div>
            </div>
            <div className="modal__btn-div">
              <button className="modal__btn" type="submit">Post Image</button>
            </div>
          </section>
        </div>
        : ""
      }

    </form>
  )
}

export default AddImageBtn;
