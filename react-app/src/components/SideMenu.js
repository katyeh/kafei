import React from 'react';
import { useSelector } from 'react-redux';
import img from '../images/kafei-logo.png'
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const SideMenu = ({ sidebar, setSidebar, setAuthenticated }) => {
  const history = useHistory();
  const user = useSelector(state => state.user);

  return (
    <div className="sidemenu">
      <div className="sidemenu__close">
        <CloseIcon onClick={()=> setSidebar(false)} style={{ fontSize: 30 }}/>
      </div>
      <div className="sidemenu__container">
        <img className="sidemenu__pic" alt="" src={img}></img>
        <div className="sidemenu__info">
          <h3>{user.name}</h3>
          <p>{user.username}</p>
        </div>
      </div>
        <div className="sidemenu__stats">
          <div className="sidemenu__stats-container">
            <div className="sidemenu__stats-label">Balance</div>
            <div className="sidemenu__stat">{user.wallet}</div>
          </div>
          <div className="sidemenu__stats-container">
            <div className="sidemenu__stats-label">Coffees</div>
            <div className="sidemenu__stat">{user.tips}</div>
          </div>
            {user.followers &&
            <div>
                <div className="sidemenu__stats-container">
                  <div className="sidemenu__stats-label">Followers</div>
                  <div className="sidemenu__stat">{user.followers.length}</div>
                </div>
                <div className="sidemenu__stats-container sidemenu__stats-container-bottom">
                  <div className="sidemenu__stats-label">Following</div>
                  <div className="sidemenu__stat">{user.following.length}</div>
                </div>
            </div>
            }
        </div>
        <div className="sidemenu__links">
          <ul>
            <li className="sidemenu__link">
              <HomeIcon onClick={() => history.push("/")} style={{ fontSize: 40 }} />
              <p onClick={() => history.push("/")}>Home</p>
            </li>
            <li className="sidemenu__link">
              <img onClick={() => history.push(`/users/${user.id}`)} className="sidemenu__yourpage" src={img} alt=""></img>
              <p onClick={() => history.push(`/users/${user.id}`)}>Your Page</p>
            </li>
            <li className="sidemenu__link">
              <LogoutButton setAuthenticated={setAuthenticated} />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideMenu;
