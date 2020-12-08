import React from 'react';
import Home from "./components/home/Home";
import ProfileContainer from './components/profile/Profile';
import NavBar from './components/NavBar';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UploadPhotoForm from "./components/UploadPhotoForm";
import Footer from "./components/Footer";


function AppContainer({authenticated, setAuthenticated}) {
  return (
    <>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <ProtectedRoute
          path="/"
          exact={true}
          authenticated={authenticated}
        >
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:id"
          exact={true}
          authenticated={authenticated}
        >
          <ProfileContainer />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/uploadphoto" exact={true} authenticated={authenticated}>
          <UploadPhotoForm />
        </ProtectedRoute>

      </Switch>
    </>
  )
}

export default AppContainer;
