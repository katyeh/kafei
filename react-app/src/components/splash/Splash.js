import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../images/ka-fei-dark.png';
import StartModal from './StartModal';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Splash = ({ authenticated, setAuthenticated }) => {
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  }

  const startPage = () => {

  }

  console.log(name)

  return (
    <div className="splash">
      <div className="splash__main">
        <div className="splash__header">
          <div className="splash__header-logo">
            <img className="splash__header-img" src={img}></img>
          </div>
          <div className="splash__intro">
            <p>Kafei was created to bridge the gap between content creators and fans.</p>
            <br></br>
            <p>Its name is derived from the Chinese pinyin for coffee and references the typical coffee chats that people have to gain inspiration and guidance.</p>
          </div>
        </div>

        <div className="splash__signup-div">
          <h6>Make an Income Doing What You Love</h6>
          <subtitle>Get paid from people who love what you do. No pressure to stick to a schedule.</subtitle>
          <div className="splash__signup">
            <input onChange={updateName} value={name} placeholder="yourname"></input>
            <StartModal name={name}/>
          </div>
        </div>

        <div className="splash__featured-container">
          <h1 className="featured-creators">Featured creators</h1>
          <div className="featured__section">
            <div className="splash__featured-item">
              <div className="splash__featured-header"></div>
              <a href="#">Image</a>
            </div>
            <div className="splash__featured-item">Person 2</div>
            <div className="splash__featured-item">Person 3</div>
          </div>
          <div className="splash__featured-div">
            <h1>Give your audience an easy way to say thanks.</h1>
            <p>Kafei makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message.</p>
          </div>
        </div>

        <div className="splash__tag-section">
          <div>Image here</div>
          <div className="tag__container">
            <h1>All Kinds of Creators Use Kafei</h1>
            <subtitle>Join hundreds of creators funding their passions on Kafei!</subtitle>
            <div className="tag__grid">
              <div className="tag__item">Artists</div>
              <div className="tag__item">Food & Drink</div>
              <div className="tag__item">Dance & Theatre</div>
              <div className="tag__item">Lifestyle</div>
              <div className="tag__item">Photography</div>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div className="footer__name">
            <h1>Kathleen Yeh</h1>
          </div>
          <div class="social-links">
            <ul class="social-list">
              <li class="social-list__item">
                <a class="social-list__link" href="https://github.com/katyeh">
                  <GitHubIcon style={{ fontSize: 30 }}/>
                </a>
              </li>
              <li class="social-list__item">
                <a class="social-list__link" href="mailto:kathleenyeh1@gmail.com">
                  <LinkedInIcon style={{ fontSize: 30 }}/>
                </a>
              </li>
              <li class="social-list__item">
                <a class="social-list__link" href="tel:206-604-2354">
                  <EmailIcon style={{ fontSize: 30 }}/>
                </a>
              </li>
            </ul>
          </div>
        </footer>

      </div>
    </div>
  )
};

const SplashContainer = () => {
  return (
    <div>
      <Splash />
    </div>
  )
}

export default SplashContainer;
