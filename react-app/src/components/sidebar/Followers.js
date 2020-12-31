import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Followers = ({ user, showMenu }) => {
  const history = useHistory();

  return (
    <div>
      <div className="sidemenu__back-div">
        <div onClick={() => showMenu()} className="sidemenu__arrowback">
          <ArrowBackIosIcon style={{fontSize: 20}} />
        </div>
        <p onClick={() => showMenu()} className="sidemenu__back">Back to main menu</p>
      </div>
      <ul>
        {user.followers.map((follower) => {
          return (
            <li className="sidemenu__follower" onClick={() => history.push(`/users/${follower.id}`)}>
              <img className="sidemenu__follower-pic" src={follower.profile_image_url} ></img>
              <h3 className="sidemenu__follower-name">{follower.name}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Followers;
