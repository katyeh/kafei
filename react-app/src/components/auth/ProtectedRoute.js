import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';

const ProtectedRoute = props => {

  if (!props.authenticated) {
    return <Redirect to="/splash"/>
  } else {
    if (props.component === Home) {
      return <Home setAuthenticated={props.setAuthenticated} authenticated={props.authenticated} />
    }
    return props.component
  }

  // return (
  //   <Route {...props}/>
  // );
};

export default ProtectedRoute;
