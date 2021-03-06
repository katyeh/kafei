import React from 'react';
import Search from './Search';
import Section from './ImageSlider';
import MapContainer from '../Map';

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
          <div className="home__featured-section">
            <div>
              <h1 className="home__section-title home__section-featured">Featured Creators</h1>
            </div>
            <Section />
          </div>
          <div className="home__map">
            <div>
              <h1 className="home__section-title">Kafei around the Globe</h1>
            </div>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
