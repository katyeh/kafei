import React from 'react';
import logo from "../../images/kafei-logo.png";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TipModal from './TipModal';

const Feed = () => {
  return (
    <div className="about__container about__feed-container">
      <div className="about__label about__feed-label">
        <h3 className="about__feed-labelname">Feed</h3>
        {/* <h4 className="about__feed-contact">Leave a message</h4> */}
        <TipModal />
      </div>
      <div className="about__content about__feed-content">
        <div className="about__feed-div">
          <div className="about__feed-item">
            <div class="about__feed-main">
              <div className="about__feed-info">
                <img className="about__feed-pic" src={logo}></img>
                <h4 className="about__feed-text">Kathleen bought a Coffee for Simz</h4>
              </div>
              <div className="about__feed-more">
                <MoreHorizIcon style={{ fontSize: 30 }}/>
              </div>
            </div>
            <div className="about__feed-msg-container">
              <p className="about__feed-msg">This is so pretty! Love your work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed;
