import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CheckIcon from '@material-ui/icons/Check';
import { follow } from "../store/actions/followActions";

const FollowBtn = () => {
  const [isfollowing, setFollowing] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userId = parseInt(id)

  const onFollow = async () => {
    await dispatch(follow(user.id, id));
    setFollowing(!isfollowing)
  };

  let checkfollow = () => {
    if (user.following) {
      const followList = user.following.filter(followingUser => {
        return followingUser.id === userId
      });
      if (followList.length > 0) {
        setFollowing(true)
      }
    }
  }

  useEffect(() => {
    checkfollow()
  }, [user.following, checkfollow])

  return (
    <div>
      {
      isfollowing ?
      <button onClick={() => onFollow()} className="following__btn">
        <PersonOutlineIcon style={{ fontSize: 25 }} />
        <CheckIcon style={{ fontSize: 20 }} />
      </button>
      :
      <button onClick={() => onFollow()} className="follow-btn">Follow</button>
      }
    </div>
  )
}

export default FollowBtn;
