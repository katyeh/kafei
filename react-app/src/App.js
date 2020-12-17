import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./services/auth";
import { loadUser } from "./store/actions/signupActions";
import SplashNav from "./components/splash/SplashNav";
import Splash from "./components/splash/Splash";
import AppContainer from './AppContainer';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
// debugger
  useEffect(() => {
    // debugger
    (async() => {
      const userId = localStorage.getItem("user_id");
      if (userId) {
        const user = await authenticate();
        if (!user.errors) {
          setAuthenticated(true);
        }
        (async () => {
          // debugger
          await dispatch(loadUser(userId));
          setLoaded(true);
        })()
      } else {
        setLoaded(true);
      }
    })();
  }, [dispatch, setAuthenticated]);

  if (!loaded) {
    // debugger
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
          <ProtectedRoute
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            component={AppContainer}
          >
          </ProtectedRoute>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
