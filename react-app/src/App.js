import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import { authenticate } from "./services/auth";
import { loadUser } from "./store/actions/signupActions";
import SplashNav from "./components/splash/SplashNav";
import Splash from "./components/splash/Splash";
import Home from "./components/home/Home";
import Profile from './components/profile/Profile';
import NavBar from './components/NavBar';
import AppContainer from './AppContainer';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      const userId = localStorage.getItem("user_id");
      console.log('THIS', userId);
      (async () => {
        await dispatch(loadUser(userId));
        setLoaded(true);
      })()
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/splash" exact={true}>
          <div className="splash__container">
            <SplashNav authenticated={authenticated} setAuthenticated={setAuthenticated} />
            <div className="splash__main">
              <Splash>Splash</Splash>
            </div>
          </div>
        </Route>
        <Route path="/">
          <AppContainer
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </BrowserRouter>

    // <BrowserRouter>
    //   <NavBar setAuthenticated={setAuthenticated} />
    //   <Route path="/login" exact={true}>
    //     <LoginForm
    //       authenticated={authenticated}
    //       setAuthenticated={setAuthenticated}
    //     />
    //   </Route>
    //   <Route path="/sign-up" exact={true}>
    //     <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
    //   </Route>
    //   <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
    //     <UsersList/>
    //   </ProtectedRoute>
    //   <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
    //     <User />
    //   </ProtectedRoute>
    //   <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
    //     <h1>My Home Page</h1>
    //   </ProtectedRoute>
    // </BrowserRouter>
  );
}

export default App;
