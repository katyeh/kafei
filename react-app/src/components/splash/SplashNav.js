import React from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import logo1 from "../../images/kafei-logo.png"
import logo2 from "../../images/kafei-dark.png"


const SplashNav = ({ authenticated, setAuthenticated }) => {
  return(
    <div className="splashnav">
      <div className="splashnav-logo__container">
        <img className="logo1" src={logo1}></img>
        <img className="logo2" src={logo2}></img>
      </div>
      <div className="splashnav__buttons">
        <LoginModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
        <SignupModal
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </div>
    </div>
  )
};

export default SplashNav;
