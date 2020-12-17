import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signupUser } from '../../store/actions/signupActions';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const StartModal = ({name, setName, authenticated, setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      let user = new FormData();
      user.append('name', name);
      user.append('username', username);
      user.append('email', email);
      user.append('password', password);
      user = await dispatch(signupUser(user));

      if (user && !user.errors) {
        setAuthenticated(true);
        history.push("/")
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <div className="signupModal">
      <div className="signup-btn__div">
        <button onClick={() => setIsOpen(true)} className="splash__startbtn">Start my page -></button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Signup Modal"
        className="signup-modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="login-header">
          <h2>Sign Up</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form className="signup-form" onSubmit={onSignUp}>

          <div className="login-content">
            <input
              type="text"
              name="name"
              placeholder="Display Name"
              onChange={updateName}
              value={name}
              required
            ></input>
          </div>
          <div className="login-content">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
              required
            ></input>
          </div>
          <div className="login-content">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={updateEmail}
              value={email}
              required
            ></input>
          </div>
          <div className="login-content">
            <input
              type="password"
              name="password"
              placeholder="Choose a Password"
              onChange={updatePassword}
              value={password}
              required
            ></input>
          </div>
          <div className="login-content">
            <input
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className="login-btn__div">
            <button className="login-btn" type="submit">Create Account</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default StartModal;
