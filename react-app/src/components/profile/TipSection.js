import React, { useState } from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import logo from "../../images/logo-transparent.png";

const TipSection = () => {
  let [coffee, setCoffee] = useState(1)
  let [total, setTotal] = useState(3)

  const decrement = () => {
    if (coffee == 0) {
      setCoffee(0)
      setTotal(0)
    } else {
      setCoffee(coffee - 1);
      setTotal(total-3)
    }
  }

  const increment = () => {
      setCoffee(coffee++);
      // setTotal()
  }

  return (
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
          <input className="about__tip-message" placeholder="Your message"></input>
        </div>
      </div>
      <div className="about__tip-donate-container">
        <button className="about__tip-donate">Donate ${total}</button>
        <p className="about__tip-policy">Kafei doesn't take a fee!</p>
      </div>
    </div>
  )
}

export default TipSection;
