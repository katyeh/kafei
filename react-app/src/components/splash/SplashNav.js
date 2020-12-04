import React from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const SplashNav = ({ authenticated, setAuthenticated }) => {
  return(
    <div className="splashnav">
      <div className="splashnav-logo__container">
        logo here
      </div>
      <div className="splashnav-buttons__container">
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
