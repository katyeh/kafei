import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import logo from "../../images/logo-transparent.png";
import { useSelector, useDispatch } from 'react-redux';
import { giveTip } from "../../store/actions/tipActions";
import { useParams } from 'react-router-dom';
import TipSection from './TipSection';
import CloseIcon from '@material-ui/icons/Close';
import Modal from 'react-modal';

const TipModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let [coffee, setCoffee] = useState(1);
  let [total, setTotal] = useState(3);
  const [body, setBody] = useState("");
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const updateBody = (e) => {
    setBody(e.target.value)
  }

  const decrement = () => {
    if (coffee == 0) {
      setCoffee(0)
      setTotal(0)
    } else {
      setCoffee(coffee - 1);
      setTotal(total-3)
    }
  };

  const increment = () => {
      setCoffee(coffee++);
      // setTotal()
  };

  const onTip = async (e) => {
    e.preventDefault();
    if (user) {
      let tip = new FormData();
      tip.append('amount', coffee);
      tip.append('sender_id', user.id);
      tip.append('recipient_id', id);
      tip.append('body', body);

      tip = await dispatch(giveTip(tip, id));
    }
  };

  return (
    <div className="tipModal-container">
      <h4 onClick={() => setIsOpen(true)} className="about__feed-contact">Leave a message</h4>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Signup Modal"
        className="tipModal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <form onSubmit={onTip}>
          <div className="tipModal__label">
            <h3>Buy a Coffee for katyeh</h3>
            <div onClick={() => setIsOpen(false)} class="tipModal__close">
              <CloseIcon style={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="about__content about__tip-content">
            <div className="about__tip-content-left">
              <img className="about__tip-logo" src={logo} alt="" />
              <p className="about__tip-amount">${total} each</p>
            </div>
            <div className="about__tip-content-right">
              <button
                onClick={() => decrement()}
                className="about__tip-subtract"
                >
                <RemoveIcon />
              </button>
              <input value={coffee} type="number" className="about__tip-number"></input>
              <button
                onClick={() => {
                  setCoffee(coffee + 1)
                  setTotal(total+3)
                }}
                className="about__tip-add"
              >
                <AddIcon />
              </button>
            </div>
          </div>
          <div className="about__tip-input-div">
            <div className="about__total-container">
                <span>$</span>
                <input className="about__tip-total" placeholder={total} />
              </div>
              <div class="about__tip-message-div">
                <input onChange={updateBody} className="about__tip-message" placeholder="Your message"></input>
              </div>
            </div>
            <div className="about__tip-donate-container">
              <button type="submit" className="about__tip-donate">Donate ${total}</button>
              <p className="about__tip-policy">Kafei doesn't take a fee!</p>
            </div>
        </form>
      </Modal>
    </div>
  )
}

export default TipModal;
