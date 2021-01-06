import React from 'react';

const Menu = ({ user, showFollowers, showFollowing }) => {

  return (
    <div>
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
                <div onClick={() => showFollowers()} className="sidemenu__stats-label sidemenu__follow">Followers</div>
                <div className="sidemenu__stat">{user.followers.length}</div>
              </div>
              <div className="sidemenu__stats-container sidemenu__stats-container-bottom">
                <div onClick={() => showFollowing()} className="sidemenu__stats-label sidemenu__follow">Following</div>
                <div className="sidemenu__stat">{user.following.length}</div>
              </div>
          </div>
          }
      </div>
    </div>
  )
}

export default Menu;
