import React, { useEffect, useState } from 'react';
import Home from "./components/home/Home";
import ProfileContainer from './components/profile/Profile';
import NavBar from './components/NavBar';
import { Switch } from 'react-router-dom';
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

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      const userId = localStorage.getItem("user_id");
      (async () => {
        await dispatch(loadUser(userId));
        setLoaded(true);
      })()
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar setAuthenticated={setAuthenticated} />
        {/* <ThemeMode /> */}
      <Switch>
        <ProtectedRoute
          path="/"
          exact={true}
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          component={Home}
        >
          {/* <Home
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          /> */}
          {/* <Footer /> */}
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:id"
          exact={true}
          authenticated={authenticated}
          component={ProfileContainer}
        >
          {/* <ProfileContainer /> */}
          {/* <Footer /> */}
        </ProtectedRoute>

        <ProtectedRoute
          path="/uploadphoto"
          exact={true}
          authenticated={authenticated}
          component={UploadPhotoForm}
        >
          {/* <UploadPhotoForm /> */}
        </ProtectedRoute>
        <ProtectedRoute path="/map" exact={true} authenticated={authenticated} component={Map}>
          {/* <Map /> */}
        </ProtectedRoute>
      </Switch>
      <Footer />
    </>
  )
}

export default AppContainer;
