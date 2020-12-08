import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import logo from "../../images/logo-transparent.png";
import { useSelector, useDispatch } from 'react-redux';
import { giveTip } from "../../store/actions/tipActions";
import { useParams } from 'react-router-dom';

const TipSection = () => {
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
    if (coffee === 0) {
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
    // debugger
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
    <form onSubmit={onTip}>
      <div className="about__container about__tip-container">
        <div className="about__label">
          <h3>Buy a Coffee for katyeh</h3>
        </div>
        <div className="about__content about__tip-content">
          <div className="about__tip-content-left">
            <img className="about__tip-logo" src={logo} alt="" />
            <p className="about__tip-amount">${total} each</p>
          </div>
          <div className="about__tip-content-right">
            <span
              onClick={() => decrement()}
              className="about__tip-subtract"
              >
              <RemoveIcon />
            </span>
            <input value={coffee} type="number" className="about__tip-number"></input>
            <span
              onClick={() => {
                setCoffee(coffee + 1)
                setTotal(total+3)
              }}
              className="about__tip-add"
            >
              <AddIcon />
            </span>
          </div>
        </div>
        <div className="about__tip-input-div">
          <div className="about__total-container">
            <span>$</span>
            <input className="about__tip-total" placeholder={total} />
          </div>
          <div className="about__tip-message-div">
            <input onChange={updateBody} className="about__tip-message" placeholder="Your message"></input>
          </div>
        </div>
        <div className="about__tip-donate-container">
          <button type="submit" className="about__tip-donate">Donate ${total}</button>
          <p className="about__tip-policy">Kafei doesn't take a fee!</p>
        </div>
      </div>
    </form>
  )
}

export default TipSection;
