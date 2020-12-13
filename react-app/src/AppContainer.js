import React from 'react';
import Home from "./components/home/Home";
import ProfileContainer from './components/profile/Profile';
import NavBar from './components/NavBar';
import { Switch } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UploadPhotoForm from "./components/UploadPhotoForm";
import Footer from "./components/Footer";
import Map from './components/Map';
import ThemeMode from './components/ThemeChanger';


function AppContainer({authenticated, setAuthenticated}) {
  return (
    <>
      <NavBar setAuthenticated={setAuthenticated} />
        {/* <ThemeMode /> */}
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
        <ProtectedRoute path="/map" exact={true} authenticated={authenticated}>
          <Map />
        </ProtectedRoute>
      </Switch>
    </>
  )
}

export default AppContainer;
