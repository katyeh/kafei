import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LogoutButton = ({setAuthenticated}) => {
  const history = useHistory();
  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    history.push("/splash");
  };

  return (
    <>
      <ExitToAppIcon onClick={onLogout} style={{ fontSize: 40 }} />
      <p onClick={onLogout}>Log Out</p>
    </>
  )
};

export default LogoutButton;
