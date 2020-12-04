import React from 'react';
import NavBar from '../NavBar';
import SideMenu from './SideMenu';

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <main className="home__main">
          <h1>Home</h1>
        </main>
      </div>
    </div>
  )
}

const HomeContainer = ({setAuthenticated={setAuthenticated}}) => {
  return (
    <div>
      <NavBar setAuthenticated={setAuthenticated} />
      <Home />
    </div>
  )
}
export default HomeContainer;
