import React, { useState } from 'react';
import LikePost from './LikePost';
import DislikePost from './DislikePost';
import { useSelector } from 'react-redux';

const PostHeart = ({ post }) => {
  const [heart, setHeart] = useState(false)
  const user = useSelector(state => state.user)

    const hearts = post.likes.filter(like => {
      return like.user_id === user.id
    })

  return (
    <div className="posts__like-btn">
      { hearts.length > 0 ?
      <DislikePost post={post} user={user} />
      :
      <LikePost post={post} user={user}/>
      }
      <p>{post.likes.length}</p>
    </div>
  )
}

export default PostHeart;
