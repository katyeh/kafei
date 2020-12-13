import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./services/auth";
import { loadUser } from "./store/actions/signupActions";
import SplashNav from "./components/splash/SplashNav";
import Splash from "./components/splash/Splash";
import AppContainer from './AppContainer';
// import ThemeMode from './components/ThemeChanger';

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
          {/* <ThemeMode/> */}
          <AppContainer
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
