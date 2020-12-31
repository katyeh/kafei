import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { deleteLike } from '../../store/actions/likeActions';
import { useDispatch } from 'react-redux';

const DislikePost = ({ like, setLike, setHeart, post, user }) => {
  const dispatch = useDispatch();

  const onDislike = async (post_id, user_id) => {
    // debugger
    await dispatch(deleteLike(post.id, user.id));
    setHeart(false);
    setLike(like - 1);
  };

  return (
    <div onClick={() => onDislike()} className="dislike">
      <FavoriteIcon style={{ fontSize: 25 }} />
    </div>
  )
}

export default DislikePost;
