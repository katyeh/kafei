import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import logo from "../../images/logo-transparent.png";

const TipSection = () => {
  let [total, setTotal] = useState(0)

  const decrement = () => {
    if (total == 0) {
      setTotal(0)
    } else {
      setTotal(total - 1);
    }
  }

  return (
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
          <button
            onClick={() => decrement()}
            className="about__tip-subtract"
            >
            <RemoveIcon />
          </button>
          <input value={total} type="number" className="about__tip-number"></input>
          <button onClick={() => setTotal(total + 1)} className="about__tip-add">
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
  )
}

export default TipSection;
