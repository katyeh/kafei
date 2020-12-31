import React from 'react';
import AddImageBtn from './AddImageBtn';
// import { getPhotos } from '../../store/actions/photoActions';

const Gallery = ({ photos, currentUser, isProfile }) => {
  return (
    <div className="gallery">
      <div className="gallery__main-container">
        {isProfile ?
        <AddImageBtn />
        : null }
        <div className="gallery__latest">
          <h3 className="gallery__label">Latest</h3>
          <div className="gallery__grid-container">
            {photos && photos.length !== 0 ? photos.map(photo => {
              return (
                <div key={photo.id} className="gallery__grid-item">
                <img alt="" className="gallery__photo" src={photo.pic_url} />
                </div>
              )
            }) : "No photos posted yet! Check back later."}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
