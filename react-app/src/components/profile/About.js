import React from 'react';
import logo from "../../images/logo-transparent.png";
import TipSection from './TipSection';
import Feed from './Feed';

const About = ({ photos, currentUser, isProfile }) => {

  return (
    <div className="about">
      <div className="profile__main-container">
        <div className="about__left-container">

            {currentUser ?
              <div className="about__container about__bio-container">
                <div className="about__label">
                  <h3>About</h3>
                </div>
                <div className="about__content about__bio-content">
                  <p>{currentUser.bio}</p>
                </div>
                <div className="about__bio-tags">
                  <div className="about__bio-tag">Art</div>
                  <div className="about__bio-tag">Photography</div>
                  <div className="about__bio-tag">Art</div>
                </div>
                <div className="about__bio-received">
                  <img className="about__logo" alt="" src={logo}></img>
                  <h3 className="about__received">x {currentUser.tips} Received</h3>
                </div>
              </div>
            : "" }


          <div className="about__container about__gallery-container">
            <div className="about__gallery-label">
              <h3>Gallery</h3>
            </div>
            <div className="about__gallery-content">
            {photos && photos.slice(0,5).map(photo => {
              return (
                <img className="about__gallery-img" alt="" key={photo.id} src={photo.pic_url}></img>
              )
            })}
            </div>
          </div>

        </div>
        <div className="about__right-container">
          {isProfile ? "" :
            <TipSection currentUser={currentUser} />
          }
          <Feed isProfile={isProfile} />
        </div>
      </div>


    </div>
  )
}

export default About;
