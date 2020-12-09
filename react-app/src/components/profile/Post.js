import React, {  useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/actions/postActions';

const Post = ({ post, currentUser }) => {
  const dispatch = useDispatch();
  let [hide, setHide] = useState(true);

  const onDelete = async (id) => {
    await dispatch(deletePost(id));
  };

  return (
    <div>
      <div className="posts__post-container">
        <div className="posts__info">
          <img className="about__feed-pic" alt="" src={currentUser.profile_image_url}></img>
          <div className="posts__name">
            <h4 className="about__feed-sendername about__feed-text">{currentUser.name}</h4>
            <h6>6 days ago</h6>
          </div>
        </div>
        <div className="posts__msg-container">
          <p className="about__feed-msg">{post.body}</p>
          <div className="posts__msg-btns">
            <div className="posts__like-btn">
              <FavoriteBorderIcon style={{ fontSize: 25 }} />
              <p>3</p>
            </div>
            <div onClick={() => setHide(!hide)}
            className="posts__more-btn"
            >
            <MoreHorizIcon style={{ fontSize: 25 }} />
              <div className="posts__dropdown">
                { hide ? null :
                <ul className="posts__delete">
                  <CloseIcon style={{ fontSize: 20 }} />
                  <p onClick={() => onDelete(post.id)}>Delete</p>
                </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
