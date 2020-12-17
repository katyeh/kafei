import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  // debugger

  if (!props.authenticated) {
    return <Redirect to="/splash"/>
  } else {
    const Component = props.component
    return <Component authenticated={props.authenticated} setAuthenticated={props.setAuthenticated} />
  }

  // return (
  //   <Route {...props}/>
  // );
};

export default ProtectedRoute;
