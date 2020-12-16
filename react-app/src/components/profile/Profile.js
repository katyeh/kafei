import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../../store/actions/currentUser';
import logo from '../../images/logo-transparent.png';
import FollowBtn from '../FollowBtn';
import About from './About';
import Gallery from './Gallery';
import Posts from './Posts';
import { getPhotos } from '../../store/actions/photoActions';
import Modal from 'react-modal';
import TipModal from './TipModal';
import ProfileImage from './ProfileImage';
import CoverImage from './CoverImage';


const Profile = ({ getOneUser, user, id }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [about, setAbout] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [posts, setPosts] = useState(false);
  let [headerClass, setHeaderClass] = useState("")
  const currentUser = useSelector(state => state.currentUser)
  const userId = Number.parseInt(id);
  const dispatch = useDispatch();

  const photos = useSelector(state => state.photos);
  console.log('ID', id)
  console.log('UserId', userId)
  // console.log("user:", user, "\nuser.id:", user.id, "\nuserId:", userId)
  useEffect(() => {
    (async () => {
      await dispatch(getPhotos(userId));
      getOneUser(userId);
    })()
  }, [userId, dispatch, currentUser.id, user.profileImageUrl, getOneUser]);

  useEffect(() => {
    profile()
    changeClass();
  })

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

  const changeClass = () => {
    // debugger
    if (!isProfile) {
      setHeaderClass("profile__header")
    } else {
      setHeaderClass("profile__user-header")
    }
  }

  return (
    <div className="profile">
      <div className="profile__main">
        {isProfile ?
          <CoverImage user={user} currentUser={currentUser} />
        :
          <div className="profile__cover">
            <img src={currentUser.cover_image_url} alt="" className="profile__header-img"></img>
          </div>
        }

        <div className={headerClass}>
          <div className="profile__user">
          {isProfile ?
            <ProfileImage user={user} currentUser={currentUser} />
          :
            <div className="profile__img-div">
              <img src={currentUser.profile_image_url} alt="" className="profile__user-img"></img>
            </div>
          }
              {currentUser ?
                <div className="profile__info">
                  <h3>Buy a Coffee for</h3>
                  <h2>{currentUser.username}</h2>
                  <p>{user.followers.length} Followers</p>
                </div>
              : ""}
          </div>
          { isProfile ? "" :
            <div className="profile__btns">
                <button onClick={() => setIsOpen(true)} className="support-btn">
                  <img className="profile__logo-img" src={logo} alt=""></img>
                  <div>Support</div>
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setIsOpen(false)}
                  contentLabel="Signup Modal"
                  className="tipModal"
                  overlayClassName="overlay"
                  shouldCloseOnOverlayClick={true}
                  closeTimeoutMS={500}
                >
                  <TipModal setIsOpen={setIsOpen} />
                </Modal>
              <FollowBtn />
            </div>
          }
        </div>
        <div className="profile__tabs-container">
          <div className="profile__tabs">
            <div onClick={() => showAbout()} className={`profile__tab ${about === true ? "selected" : ""}`}>About</div>
            <div onClick={() => showGallery()} className={`profile__tab ${gallery === true ? "selected" : ""}`}>Gallery</div>
            <div onClick={() => showPosts()} className={`profile__tab ${posts === true ? "selected" : ""}`}>Posts</div>
          </div>
        </div>

        <div className="profile__body">
          <div className="profile__grid-container">
            { about ? <About photos={photos} currentUser={currentUser} isProfile={isProfile} /> : <span></span> }
            { gallery ? <Gallery photos={photos} currentUser={currentUser} isProfile={isProfile} /> : <span></span> }
            { posts ? <Posts currentUser={currentUser} isProfile={isProfile} /> : <span></span> }
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileContainer = (props) => {

  // const currentUser = useSelector((state) => state.currentUser);
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log('This is the ID', id)
  return (
    <Profile
      // user={currentUser}
      getOneUser={(id) => dispatch(getOneUser(id))}
      user={user}
      id={id}
    />
  );
}

export default ProfileContainer;
