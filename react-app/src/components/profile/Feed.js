import React, { useEffect } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import TipModal from './TipModal';
import { useSelector, useDispatch } from 'react-redux';
import { getTips } from "../../store/actions/tipActions";


const Feed = ({ isProfile }) => {
  const user = useSelector(state => state.user);
  const transactions = useSelector(state => state.tips);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getTips(user.id))
    })()
  }, [dispatch, user.id]);

  return (
    <div className="about__container about__feed-container">
      <div className="about__label about__feed-label">
        <h3 className="about__feed-labelname">Feed</h3>
        {isProfile ? null :
          <TipModal />
        }
      </div>
      <div className="about__content about__feed-content">
        <div className="about__feed-div">
          {Array.isArray(transactions) && transactions.map(tip => {
            return (
              <div key={tip.sender.id*10} className="about__feed-item">
                <div className="about__feed-main">
                  <div className="about__feed-info">
                    <img className="about__feed-pic" alt="" src={tip.sender.profile_image_url}></img>
                    <h4 className="about__feed-sendername about__feed-text">{tip.sender.name}</h4>
                    <p className="about__feed-txt">bought a Coffee for</p>
                    <h4 className="about__feed-text">{user.name}</h4>
                  </div>
                  <div className="about__feed-more">
                    <MoreHorizIcon style={{ fontSize: 30 }} />
                  </div>
                </div>
                {tip.comments[0] ?
                  <div className="about__feed-msg-container">
                    <p className="about__feed-msg">{tip.comments[0].body}</p>
                  </div>
                : ""
                }
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Feed;
