import React from 'react';
import { login } from "../../services/auth";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {loadUser} from '../../store/actions/signupActions'

const Demo = ({ authenticated,  setAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onDemo = async (e) => {
    e.preventDefault();
    const user = await login('demo@user.com', 'password');
    if (!user.errors) {
      setAuthenticated(true);
      dispatch(loadUser(user.id));
      history.push('/')
    }
  }
  return (
    <div>
      <button onClick={onDemo} className="login__btn">Demo</button>
    </div>
  )
}

export default Demo;
