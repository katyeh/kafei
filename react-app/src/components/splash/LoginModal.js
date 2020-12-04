import React, { useState } from 'react';
import Modal from 'react-modal';
import { login } from "../../services/auth";
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root');

const LoginModal = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  let history = useHistory();

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      history.push("/")
    } else {
      setErrors(user.errors);
    }
  };

  return (
    <>
      <button className="login__btn" onClick={() => setIsOpen(true)}>Log In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Login Modal"
        className="login-modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
      >
        <div className="login-header">
          <h1>Login</h1>
          <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
        </div>

        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div className="login-content">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="login-content">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          <div className="login-content">
            <button type="submit">Login</button>
          </div>
          </div>
        </form>
      </Modal>
    </>
  )
};

export default LoginModal;
