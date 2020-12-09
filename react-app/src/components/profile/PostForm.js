import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import logo from "../../images/kafei-logo.png";
import { makePost } from "../../store/actions/postActions";
import { useSelector, useDispatch } from 'react-redux';


const PostForm = ({ setIsOpen }) => {
  const user = useSelector(state => state.user);
  const [body, setBody] = useState("")
  const dispatch = useDispatch();

  const onPost = async () => {
    await dispatch(makePost(user.id, body))
    setIsOpen(false);
  }

  const updateBody = (e) => {
    setBody(e.target.value)
  };

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
          <textarea onChange={updateBody} cols="30" rows="10" placeholder="Write a quick update..." className="postform__message"></textarea>
        </div>
        <button onClick={() => onPost()} className="postform__modal-btn">Post</button>
      </div>
    </div>
  )
}

export default PostForm;
