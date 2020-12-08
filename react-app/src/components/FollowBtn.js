import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CheckIcon from '@material-ui/icons/Check';
import { getFollowing } from "../store/actions/followingActions";
import { follow } from "../store/actions/followActions";

const FollowBtn = () => {
  const [isfollowing, setFollowing] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const following = useSelector(state => state.following);

  useEffect(() => {
    (async () => {
      await dispatch(getFollowing(user.id));
    })()
  }, [dispatch, user.id]);

  useEffect(() => {
    checkfollow();
  })

  const onFollow = async () => {
    if (!isfollowing && id && user) {
      const res = dispatch(follow(user.id, id));
    };
  };

  let checkfollow = () => {
    if (following[0]) {
      following.forEach(foll => {
        if (foll.user.id === id) {
          // console.log("FOLLOWING ID", foll.user.id)
          // console.log("YOUR ID", id)
          // setFollowing(true);
          // console.log("FOLLOW?", isfollowing)
        }
        else{
          setFollowing(false);
        }
      })
    }
  }

  // console.log(isfollowing)

  return (
    <div>
      {
      isfollowing ?
      <button className="following__btn">
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
