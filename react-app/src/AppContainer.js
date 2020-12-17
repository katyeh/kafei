import React from 'react';
import Home from "./components/home/Home";
import ProfileContainer from './components/profile/Profile';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import UploadPhotoForm from "./components/UploadPhotoForm";
import Footer from "./components/Footer";
import Map from './components/Map';

function AppContainer({authenticated, setAuthenticated}) {
// debugger
  return (
    <>
      <NavBar setAuthenticated={setAuthenticated} />
      <Switch>
        <Route
          path="/"
          exact={true}
        >
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route
          exact={true}
          path="/users/:id"
        >
            <ProfileContainer authenticated={authenticated} />
        </Route>

        <Route
          path="/uploadphoto"
          exact={true}
        >
          <UploadPhotoForm authenticated={authenticated} />
        </Route>
        <Route path="/map" exact={true} >
          <Map authenticated={authenticated} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default AppContainer;
