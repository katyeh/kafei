import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../images/kafei-logo.png"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { getUsers } from "../../store/actions/users";

const ImageSlider = () => {
  const user = useSelector(state => state.user);
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (user.id) {
        await dispatch(getUsers(user.id));
      }
    })()
  }, [dispatch, user.id]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <ArrowForwardIosIcon />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          <ArrowBackIosIcon />
        </div>
      </div>
    )
  };

  return (
    <div className="slider__container">
      <Slider {...settings}>
      {users.featured_creators && users.featured_creators.map(user => {
        return(
          <div key={user.id} className="card-wrapper">
            <div className="card">
              <div className="card__header">
                <div className="card__image">
                  <img className="slider__img" src={user.profile_image_url} alt=""></img>
                </div>
              </div>
              <div className="card__details">
                <h2>{user.name}</h2>
                <h5>{user.username}</h5>
              </div>
            </div>
          </div>
        );
      })}
      </Slider>
    </div>
  )
};

export default ImageSlider;
