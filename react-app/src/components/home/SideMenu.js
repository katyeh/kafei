import React from 'react';
import { useSelector } from 'react-redux';
import img from '../../images/kafei-logo.png'
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';

const SideMenu = ({ sidebar, setSidebar }) => {
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
          <div className="sidemenu__stats-container sidemenu__stats-container-bottom">
            <div className="sidemenu__stats-label">Following</div>
            <div className="sidemenu__stat">0</div>
          </div>
        </div>
        <div className="sidemenu__links">
          <ul>
            <li className="sidemenu__link">
              <HomeIcon onClick={() => history.push("/")} style={{ fontSize: 40 }} />
              <p>Home</p>
            </li>
            <li className="sidemenu__link">
              <img onClick={() => history.push("/users/:id")} className="sidemenu__yourpage" src={img} alt=""></img>
              <p onClick={() => history.push("/users/:id")}>Your Page</p>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideMenu;
