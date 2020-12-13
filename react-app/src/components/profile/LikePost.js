import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getLikes, addLikeToPost } from "../../store/actions/likeActions";
import { useDispatch, useSelector } from 'react-redux';
import DislikePost from './DislikePost';

const LikePost = ({ post, user }) => {
  // const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLike = () => {
    dispatch(addLikeToPost(post.id, user.id))
  };

  return (
    // <div>
    //   <div className="posts__like-btn">
          /* <DislikePost post={post} user={user}/> */
          <div onClick={() => onLike()}>
            <FavoriteBorderIcon style={{ fontSize: 25 }} />
          </div>
        /* <p>{post.likes.length}</p> */
    //   </div>
    // </div>
  )
}

export default LikePost;
