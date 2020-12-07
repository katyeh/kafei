import React from 'react';
import AddImageBtn from './AddImageBtn';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__main-container">
        <AddImageBtn />
        <div className="gallery__latest">
          <h3 className="gallery__label">Latest</h3>
          <div className="gallery__grid-container">
            <div className="gallery__grid-item">Item 1</div>
            <div className="gallery__grid-item">Item 1</div>
            <div className="gallery__grid-item">Item 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
