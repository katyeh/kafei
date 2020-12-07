import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/actions/currentUser';
import { getAllUsers } from '../../store/actions/users';
import { useDispatch } from 'react-redux';
import coverimg from '../../images/cover.jpg';
import kathleenimg from '../../images/kathleen.jpg';
import logo from '../../images/logo-transparent.png';
import FollowBtn from '../FollowBtn';
import About from './About';
import Gallery from './Gallery';
import Posts from './Posts';

const Profile = ({ users }) => {
  const [isProfile, setProfile] = useState(false);
  const [about, setAbout] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [posts, setPosts] = useState(false);

  const user = useSelector(state => state.user)
  const { id } = useParams();
  const userId = Number.parseInt(id);

  useEffect(() => {
    getOneUser(userId);
  }, [userId]);

  const profile = () => {
    if (user.id === userId) {
      setProfile(true);
    };
  };

  const showAbout = () => {
    setAbout(true);
    setGallery(false);
    setPosts(false);
  }
  const showGallery = () => {
    setGallery(true);
    setAbout(false);
    setPosts(false);
  }
  const showPosts = () => {
    setPosts(true);
    setAbout(false);
    setGallery(false);
  }

  return (
    <div className="profile">
      <div className="profile__main">
        <div className="profile__cover">
          <img src={coverimg} alt="" className="profile__header-img"></img>
        </div>

        <div className="profile__header">
          <div className="profile__user">
            <div className="profile__img-div">
              <img src={kathleenimg} alt="" className="profile__user-img"></img>
            </div>
            <div className="profile__info">
              <h3>Buy a Coffee for</h3>
              <h2>katyeh</h2>
              <p>10 Followers</p>
            </div>
          </div>
          <div className="profile__btns">
            <button className="support-btn">
              <img className="profile__logo-img" src={logo} alt=""></img>
              <div>Support</div>
            </button>
            <FollowBtn />
          </div>
        </div>
        <div className="profile__tabs-container">
          <div className="profile__tabs">
            <div onClick={() => showAbout()} className={`profile__tab ${about == true ? "selected" : ""}`}>About</div>
            <div onClick={() => showGallery()} className={`profile__tab ${gallery == true ? "selected" : ""}`}>Gallery</div>
            <div onClick={() => showPosts()} className={`profile__tab ${posts == true ? "selected" : ""}`}>Posts</div>
          </div>
        </div>

        <div className="profile__body">
          <div className="profile__grid-container">
            { about ? <About /> : <span></span> }
            { gallery ? <Gallery /> : <span></span> }
            { posts ? <Posts /> : <span></span> }
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileContainer = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getAllUsers())
    })()
  }, []);

  return (
    <Profile users={users}/>
  )
}

export default ProfileContainer;
