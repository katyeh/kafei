import React from 'react';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Following = ({ user, showMenu }) => {
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
        {user.following.map((following) => {
          return (
            <li className="sidemenu__follower" onClick={() => history.push(`/users/${following.id}`)}>
              <img alt="" className="sidemenu__follower-pic" src={following.profile_image_url} ></img>
              <h3 className="sidemenu__follower-name">{following.name}</h3>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Following;
