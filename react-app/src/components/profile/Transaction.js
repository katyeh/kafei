import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { deleteTip } from '../../store/actions/tipActions';
import { useDispatch } from 'react-redux';

const Transaction = ({ tip, user, isProfile, currentUser }) => {
  const dispatch = useDispatch();
  let [hide, setHide] = useState(true);

  const onDelete = async (id) => {
    await dispatch(deleteTip(id));
  }

  return (
    <div className="transaction">
      <div key={tip.sender.id*10} className="about__feed-item">
        <div className="about__feed-main">
          <div className="about__feed-info">
            <img className="about__feed-pic" alt="" src={tip.sender.profile_image_url}></img>
            <h4 className="about__feed-sendername about__feed-text">{tip.sender.name}</h4>
            <p className="about__feed-txt">bought a Coffee for</p>
            <h4 className="about__feed-text">{currentUser.name}</h4>
          </div>
          {isProfile ?
            <div onClick={() => setHide(!hide)} className="about__feed-more">
              <MoreHorizIcon style={{ fontSize: 30 }} />
                <div className="tips__dropdown">
                  { hide ? null :
                  <div>
                    <ul className="tips__delete">
                      <CloseIcon style={{ fontSize: 20 }} />
                      <p onClick={() => onDelete(tip.id)}>Delete</p>
                    </ul>
                  </div>
                  }
                </div>
            </div>
          : null }
        </div>
        {tip.comments[0] ?
          <div className="about__feed-msg-container">
            <p className="about__feed-msg">{tip.comments[0].body}</p>
          </div>
        : ""
        }
      </div>
    </div>
  )
}

export default Transaction;
