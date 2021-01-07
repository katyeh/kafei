import React from 'react';
import { login } from "../../services/auth";
import { useHistory } from 'react-router-dom';

const Demo = ({ authenticated,  setAuthenticated }) => {
  const history = useHistory();

  const onDemo = async (e) => {
    e.preventDefault();
    const user = await login('demo@user.com', 'password');
    if (!user.errors) {
      setAuthenticated(true);
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
