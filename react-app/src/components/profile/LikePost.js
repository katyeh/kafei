import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { getLikes, addLikeToPost } from "../../store/actions/likeActions";
import { useDispatch, useSelector } from 'react-redux';
import DislikePost from './DislikePost';

const LikePost = ({ post }) => {
  const [heart, setHeart] = useState(false);
  const likes = useSelector(state => state.likes);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const hearts = likes.filter(like => {
      return like.user_id === user.id
    })
      if (hearts === 0 || hearts.length === 0) {
        setHeart(false)
      } else {
        setHeart(true)
      }
  }, [heart, likes])

  useEffect(() => {
    (async () => {
      await dispatch(getLikes(post.id))
    })()
  }, []);

  const onLike = async (post_id, user_id) => {
    await dispatch(addLikeToPost(post.id, user.id))
  };


  return (
    <div>
      <div onClick={() => onLike()} className="posts__like-btn">
        { heart ?
          <DislikePost post={post} likes={likes} user={user}/>
          :
          <FavoriteBorderIcon style={{ fontSize: 25 }} />
        }
        <p>{likes.length}</p>
      </div>
    </div>
  )
}

export default LikePost;
