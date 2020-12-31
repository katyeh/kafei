import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo1 from "../images/kafei-logo.png";
import logo2 from "../images/kafei-dark.png";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import ThemeMode from './ThemeChanger';

const NavBar = ({ setAuthenticated }) => {
  const [sidebar, setSidebar] = useState(false)
  const history = useHistory();
  const user = useSelector(state => state.user);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div >
      <div className="splashnav">
        <div className="splashnav-logo__container">
          <img onClick={() => history.push("/")} className="logo1" alt="" src={logo1}></img>
          <img className="logo2" alt="" src={logo2}></img>
        </div>
        <ul className="homenav__links">
          <li>
            <button onClick={() => history.push(`/users/${user.id}`)} className="homenav__btn">My Page</button>
          </li>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <div className="homenav__homeicon">
                <HomeIcon style={{ fontSize: 30 }} />
              </div>
            </NavLink>
          </li>
          <li>
            <MenuIcon onClick={showSidebar} style={{ fontSize: 30 }} />
          </li>
          {/* <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li> */}
        <ThemeMode />
        </ul>
      </div>
      <div>
         <SideMenu sidebar={sidebar} setSidebar={setSidebar} setAuthenticated={setAuthenticated} />
        {/* { sidebar ? <SideMenu sidebar={sidebar} setSidebar={setSidebar} setAuthenticated={setAuthenticated} /> : null } */}
      </div>
    </div>

  );
}

export default NavBar;
