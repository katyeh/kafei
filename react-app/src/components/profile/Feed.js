import React, { useEffect } from 'react';
import TipModal from './TipModal';
import { useSelector, useDispatch } from 'react-redux';
import { getTips } from "../../store/actions/tipActions";
import Transaction from "./Transaction";

const Feed = ({ currentUser, isProfile }) => {
  const user = useSelector(state => state.user);
  const transactions = useSelector(state => state.tips);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getTips(currentUser.id))
    })()
  }, [dispatch, currentUser.id]);

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
              <Transaction key={tip.id*10} tip={tip} user={user} isProfile={isProfile} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Feed;
