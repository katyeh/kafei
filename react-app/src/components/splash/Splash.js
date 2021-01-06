import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import img from '../../images/ka-fei-dark.png';
import StartModal from './StartModal';
import { getUsersSplash } from '../../store/actions/users';
import Footer from "../Footer";
import splashimg from "../../images/kafei-splash.png";

const Splash = ({ authenticated, setAuthenticated }) => {
  const [name, setName] = useState("");
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getUsersSplash())
    })()
  }, [dispatch]);

  const updateName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="splash">
      <div className="splash__main">
        <div className="splash__header">
          <div className="splash__header-logo">
            <img className="splash__header-img" alt="" src={img}></img>
          </div>
          <div className="splash__intro">
            <p>Kafei was created to bridge the gap between content creators and fans.</p>
            <br></br>
            <p>Its name is derived from the Chinese pinyin for coffee and references the typical coffee chats that people have to gain inspiration and guidance.</p>
          </div>
        </div>

        <div className="splash__signup-div">
          <h6>Make an Income Doing What You Love</h6>
          <p>Get paid from people who love what you do. No pressure to stick to a schedule.</p>
          <div className="splash__signup">
            <input onChange={updateName} value={name} className="yourname" placeholder="yourname"></input>
            <StartModal name={name} setName={setName} authenticated={authenticated} setAuthenticated={setAuthenticated}/>
          </div>
        </div>

        <div className="splash__featured-container">
          <h1 className="featured-creators">Featured creators</h1>
          <div className="featured__section">
          {users[0] && users.map(user => {
            return(
              <div key={user.id} className="splash__featured-item">
                <div className="splash__featured-header"></div>
                <div className="splash__img-container">
                  <img className="splash__featured-img" alt="" src={user.profile_image_url}></img>
                </div>
                <div className="splash__featured-info">
                  <h2 className="splash__featured-name">{user.name}</h2>
                  {user.bio && user.bio.length > 0 ?
                  <p>{user.bio.substring(0, 100)}...</p>
                  : null }
                </div>
              </div>
            )
          })}

          </div>
          <div className="splash__featured-div">
            <h1>Give your audience an easy way to say thanks.</h1>
            <p>Kafei makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message.</p>
          </div>
        </div>

        <div className="splash__tag-section">
          <div>
            <img alt="" src={splashimg}></img>
          </div>
          <div className="tag__container">
            <h1>All Kinds of Creators Use Kafei</h1>
            <p>Join hundreds of creators funding their passions on Kafei!</p>
            <div className="tag__grid">
              <div className="tag__item">Artists</div>
              <div className="tag__item">Food & Drink</div>
              <div className="tag__item">Dance & Theatre</div>
              <div className="tag__item">Lifestyle</div>
              <div className="tag__item">Photography</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
};


export default Splash;
