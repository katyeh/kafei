import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { deleteLike } from '../../store/actions/likeActions';
import { useDispatch } from 'react-redux';

const DislikePost = ({ post, user }) => {
  const dispatch = useDispatch();

  const onDislike = async (post_id, user_id) => {
    debugger
    await dispatch(deleteLike(post.id, user.id));
  };

  return (
    <div onClick={() => onDislike()} className="dislike">
      <FavoriteIcon style={{ fontSize: 25 }} />
    </div>
  )
}

export default DislikePost;
