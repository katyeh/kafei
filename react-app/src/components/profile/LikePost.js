import React, { useEffect, useState } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addLikeToPost } from "../../store/actions/likeActions";
import { useDispatch, useSelector } from 'react-redux';
import DislikePost from './DislikePost';

const LikePost = ({ post }) => {
  const user = useSelector(state => state.user);
  const [heart, setHeart] = useState(false)
  const [like, setLike] = useState(post.likes.length)

  useEffect(() => {
    post.likes.forEach(like => {
      if (like.user_id === user.id) {
        setHeart(true)
      }
    })
  }, [post.likes.length, heart, post.likes, user.id])

  const dispatch = useDispatch();

  const onLike = () => {
    dispatch(addLikeToPost(post.id, user.id))
    setHeart(true)
    setLike(like + 1);
  };
  return (
    <div>
      <div className="posts__like-btn">
        { heart ?
          <DislikePost like={like} setLike={setLike} setHeart={setHeart} post={post} user={user}/>
          :
          <div onClick={() => onLike()}>
            <FavoriteBorderIcon style={{ fontSize: 25 }} />
          </div>
        }
        <p>{like}</p>
      </div>
    </div>
  )
}

export default LikePost;
