import React from 'react';
import Search from './Search';

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <div className="home__main">
          <Search />
        </div>
      </div>
    </div>
  )
};

export default Home;
