import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Menu from '../components/sidebar/Menu';
import Followers from '../components/sidebar/Followers';
import Following from '../components/sidebar/Following';

const SideMenu = ({ sidebar, setSidebar, setAuthenticated }) => {
  const history = useHistory();
  const user = useSelector(state => state.user);
  const [menu, setMenu] = useState(true);
  const [followers, setFollowers] = useState(false);
  const [following, setFollowing] = useState(false);

  const showMenu = () => {
    setMenu(true);
    setFollowers(false);
    setFollowing(false);
  }

  const showFollowers = () => {
    setFollowers(true);
    setMenu(false);
    setFollowing(false);
  };

  const showFollowing = () => {
    setFollowing(true);
    setMenu(false);
    setFollowers(false);
  };

  return (
    <div className={sidebar ? "sidemenu active" : "sidemenu"} >
      <div className="sidemenu__close">
        <CloseIcon onClick={()=> setSidebar(false)} style={{ fontSize: 30 }}/>
      </div>
      <div className="sidemenu__container">
        <img className="sidemenu__pic" alt="" src="https://kafei.s3-us-west-1.amazonaws.com/kafei-logo.png"></img>
        <div className="sidemenu__info">
          <h3>{user.name}</h3>
          <p>{user.username}</p>
        </div>
      </div>
      { menu ? <Menu user={user} showFollowers={showFollowers} showFollowing={showFollowing} /> : null }
      { followers ? <Followers user={user} showMenu={showMenu} /> : null }
      { following ? <Following user={user} showMenu={showMenu} /> : null }

      <div className="sidemenu__links">
        <ul>
          <li className="sidemenu__link">
            <HomeIcon onClick={() => history.push("/")} style={{ fontSize: 40 }} />
            <p onClick={() => history.push("/")}>Home</p>
          </li>
          <li className="sidemenu__link">
            <img onClick={() => history.push(`/users/${user.id}`)} className="sidemenu__yourpage" src="https://kafei.s3-us-west-1.amazonaws.com/kafei-logo.png" alt=""></img>
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
