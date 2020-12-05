import React from 'react';
import Search from './Search';

const Home = () => {
  return (
    <div className="home">
      <div className="home__contents">
        <div className="home__main">
          <Search />
          <div className="home__tags">
            <div className="home__tag tag1">#Art</div>
            <div className="home__tag tag2">#Blogging</div>
            <div className="home__tag tag3">#Dance & Theatre</div>
            <div className="home__tag tag4">#Design</div>
            <div className="home__tag tag5">#Food & Drink</div>
            <div className="home__tag tag6">#Lifestyle</div>
            <div className="home__tag tag7">#Photography</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
