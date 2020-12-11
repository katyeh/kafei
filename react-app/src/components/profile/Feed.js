import React, { useEffect, useState } from 'react';
import TipModal from './TipModal';
import { useSelector, useDispatch } from 'react-redux';
import { getTips } from "../../store/actions/tipActions";
import Transaction from "./Transaction";
import Modal from 'react-modal';


const Feed = ({ currentUser, isProfile }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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
          <div className="tipModal-container">
            <h4 onClick={() => setIsOpen(true)} className="about__feed-contact">Leave a message</h4>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}
              contentLabel="Signup Modal"
              className="tipModal"
              overlayClassName="overlay"
              shouldCloseOnOverlayClick={true}
              closeTimeoutMS={500}
            >
            <TipModal setIsOpen={setIsOpen} />
            </Modal>
          </div>
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
