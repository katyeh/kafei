import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import logo1 from "../images/kafei-logo.png";
import logo2 from "../images/kafei-dark.png";
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './home/SideMenu';

const NavBar = ({ setAuthenticated }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar);
  }

  return (
    <div >
      <div className="splashnav">
        <div className="splashnav-logo__container">
          <img className="logo1" alt="" src={logo1}></img>
          <img className="logo2" alt="" src={logo2}></img>
        </div>
        <ul className="homenav__links">
          <li>
            <NavLink to="/users/:id" exact={true} activeClassName="active">
              <button className="homenav__btn">My Page</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              <HomeIcon style={{ fontSize: 30 }} />
            </NavLink>
          </li>
          <li>
            <MenuIcon onClick={showSidebar} style={{ fontSize: 30 }} />
          </li>
          {/* <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li> */}
            </ul>
      </div>
      <div>
        { sidebar ? <SideMenu sidebar={sidebar} setSidebar={setSidebar}/> : null }
      </div>
    </div>

  );
}

export default NavBar;
