import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import logo from "../../images/kafei-logo.png";


const PostForm = ({ setIsOpen }) => {
  return (
    <div className="postform">
      <div className="postform__label">
        <div className="postform__close">
          <CloseIcon onClick={() => setIsOpen(false)} style={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="postform__content">
        <div className="postform__message-div">
          <img src={logo} alt="" className="postform__img" />
          <textarea cols="30" rows="10" placeholder="Write a quick update..." className="postform__message"></textarea>
        </div>
        <button className="postform__modal-btn">Post</button>
      </div>
    </div>
  )
}

export default PostForm;
