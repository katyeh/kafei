import React from 'react';
import logo from "../../images/logo-transparent.png"

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left-container">

          <div className="about__bio-container">
            <div className="bio-label">
              <h3>About</h3>
            </div>
            <div className="about__bio-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, molestiae placeat laudantium natus incidunt hic doloremque veniam, facilis quod tenetur ipsa exercitationem. Quod eius sed reiciendis inventore harum fuga earum?</p>
            </div>
            <div className="about__bio-received">
              <img className="about__logo" src={logo}></img>
              <h3 className="about__received">x 622 Received</h3>
            </div>
          </div>

        </div>
        <div className="about__right-container">

        </div>
      </div>
    </div>
  )
}

export default About;
