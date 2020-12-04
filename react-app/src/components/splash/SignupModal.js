import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signupUser } from '../../store/actions/signupActions';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SignupModal = ({authenticated, setAuthenticated}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
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
      user.append('bio', bio);
      user.append('email', email);
      user.append('password', password);
      user = await dispatch(signupUser(user));

      if (user && !user.errors) {
        setAuthenticated(true);
        history.push("/home")
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
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
    <div>
      <button className="signup__btn" onClick={() => setIsOpen(true)}>Sign Up</button>
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

        <form onSubmit={onSignUp}>

          <div className="login-content">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div className="login-content">
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className="login-content">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="login-content">
            <label>Bio</label>
            <input
              type="text"
              name="bio"
              onChange={updateBio}
              value={bio}
            ></input>
          </div>
          <div className="login-content">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className="login-content">
            <label>Confirm Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div className="login-content">
            <button className="login-btn" type="submit">Sign Up</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default SignupModal;
