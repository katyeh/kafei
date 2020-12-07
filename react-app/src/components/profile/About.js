import React from 'react';
import logo from "../../images/logo-transparent.png";
import kathleen from "../../images/kathleen.jpg";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

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
          <div className="about__container about__tip-container">
            <div className="about__label">
              <h3>Buy a Coffee for katyeh</h3>
            </div>
            <div className="about__content about__tip-content">
              <div className="about__tip-content-left">
                <img className="about__tip-logo" src={logo} alt="" />
                <p className="about__tip-amount">$3 each</p>
              </div>
              <div className="about__tip-content-right">
                <button className="about__tip-subtract">
                  <RemoveIcon />
                </button>
                <input type="number" className="about__tip-number"></input>
                <button className="about__tip-add">
                  <AddIcon />
                </button>
              </div>
            </div>
            <div className="about__tip-input-div">
              <div className="about__total-container">
                <span>$</span>
                <input className="about__tip-total" placeholder="3" />
              </div>
              <div class="about__tip-message-div">
                <input className="about__tip-message" placeholder="Your message"></input>
              </div>
            </div>
            <div className="about__tip-donate-container">
              <button className="about__tip-donate">Donate $3</button>
              <p className="about__tip-policy">Kafei doesn't take a fee!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
