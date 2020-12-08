import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddImageBtn from './AddImageBtn';
// import { getPhotos } from '../../store/actions/photoActions';

const Gallery = ({ photos, currentUser, isProfile }) => {
  const dispatch = useDispatch();
  // const photos = useSelector(state => state.photos);

  // useEffect(() => {
  //   debugger
  //   (async () => {
  //     await dispatch(getPhotos(currentUser.id))
  //   })()
  // }, [dispatch]);
  debugger

  console.log(currentUser)

  return (
    <div className="gallery">
      <div className="gallery__main-container">
        <AddImageBtn />
        <div className="gallery__latest">
          <h3 className="gallery__label">Latest</h3>
          <div className="gallery__grid-container">
            {photos.photos && photos.photos.map(photo => {
              return (
                <div key={photo.id} className="gallery__grid-item">
                <img className="gallery__photo" src={photo.pic_url} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
