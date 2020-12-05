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
      await dispatch(getUsers(user.id));
    })()
  }, []);

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
console.log("USERs:", users)
  return (
    <div className="slider__container">
      {/* {users.map(user => (
        <div>{user.name}</div>
      ))} */}
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card__header">
              <div className="card__image">
                <img className="slider__img" src={img} alt=""></img>
              </div>
            </div>
            <div className="card__details">
              <h2>John Doe</h2>
              <h5>johnny</h5>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card__header">
              <div className="card__image">
                <img className="slider__img" src={img} alt=""></img>
              </div>
            </div>
            <div className="card__details">
              <h2>John Doe</h2>
              <h5>johnny</h5>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card__header">
              <div className="card__image">
                <img className="slider__img" src={img} alt=""></img>
              </div>
            </div>
            <div className="card__details">
              <h2>John Doe</h2>
              <h5>johnny</h5>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card__header">
              <div className="card__image">
                <img className="slider__img" src={img} alt=""></img>
              </div>
            </div>
            <div className="card__details">
              <h2>John Doe</h2>
              <h5>johnny</h5>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
};

export default ImageSlider;
