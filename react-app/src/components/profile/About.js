import React from 'react';
import logo from "../../images/logo-transparent.png";
import kathleen from "../../images/kathleen.jpg";
import TipSection from './TipSection';
import Feed from './Feed';

const About = () => {
  return (
    <div className="about">
      <div className="profile__main-container">
        <div className="about__left-container">

          <div className="about__container about__bio-container">
            <div className="about__label">
              <h3>About</h3>
            </div>
            <div className="about__content about__bio-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, molestiae placeat laudantium natus incidunt hic doloremque veniam, facilis quod tenetur ipsa exercitationem. Quod eius sed reiciendis inventore harum fuga earum?</p>
            </div>
            <div className="about__bio-tags">
              <div className="about__bio-tag">Art</div>
              <div className="about__bio-tag">Photography</div>
              <div className="about__bio-tag">Art</div>
            </div>
            <div className="about__bio-received">
              <img className="about__logo" src={logo}></img>
              <h3 className="about__received">x 622 Received</h3>
            </div>
          </div>

          <div className="about__container about__gallery-container">
            <div className="about__gallery-label">
              <h3>Gallery</h3>
            </div>
            <div className="about__gallery-content">
              <img className="about__gallery-img" src={kathleen}></img>
              <img className="about__gallery-img" src={kathleen}></img>
              <img className="about__gallery-img" src={kathleen}></img>
              <img className="about__gallery-img" src={kathleen}></img>
            </div>
          </div>

        </div>
        <div className="about__right-container">
          <TipSection />
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default About;
