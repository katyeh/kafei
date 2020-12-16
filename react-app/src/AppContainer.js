import React, { useEffect, useState } from 'react';
import Home from "./components/home/Home";
import ProfileContainer from './components/profile/Profile';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UploadPhotoForm from "./components/UploadPhotoForm";
import Footer from "./components/Footer";
import Map from './components/Map';
import ThemeMode from './components/ThemeChanger';
import { useDispatch } from "react-redux";
import { authenticate } from "./services/auth";
import { loadUser } from "./store/actions/signupActions";

function AppContainer({authenticated, setAuthenticated}) {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <NavBar setAuthenticated={setAuthenticated} />
        {/* <ThemeMode /> */}
      <Switch>
        <Route
          path="/"
          exact={true}
        >
          <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          {/* <Footer /> */}
        </Route>
        <Route
          exact={true}
          path="/users/:id"
        >
          {/* <ProtectedRoute
            authenticated={authenticated}
            component={ProfileContainer}
          > */}
            <ProfileContainer authenticated={authenticated} />
            {/* <Footer /> */}
          {/* </ProtectedRoute> */}
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
