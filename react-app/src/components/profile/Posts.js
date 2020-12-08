import React, { useState } from 'react';
import logo from "../../images/kafei-logo.png";
import PostAddIcon from '@material-ui/icons/PostAdd';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Modal from "react-modal";
import PostForm from './PostForm';



const Posts = ({ currentUser, isProfile }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="posts">
      <div className="posts__container">
        {isProfile ?
        <div className="">
          <div className="posts__btn-div">
            <button onClick={() => setIsOpen(true)} className="posts__btn">
              <PostAddIcon
                style={{ fontSize: 25 }}
              />
              Add Something
            </button>
          </div>
          <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(true)}
          contentLabel="Signup Modal"
          className="posts-modal"
          overlayClassName="overlay"
          shouldCloseOnOverlayClick={true}
          >
            <PostForm setIsOpen={setIsOpen} />
          </Modal>
        </div>
        : "" }

        <div className="posts__info">
          <img className="about__feed-pic" src={logo}></img>
          <div className="posts__name">
            <h4 className="about__feed-sendername about__feed-text">katyeh</h4>
            <h6>6 days ago</h6>
          </div>
        </div>
        <div className="posts__msg-container">
          <p className="about__feed-msg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nihil repellat laboriosam eligendi vel, vitae exercitationem, architecto dolor nobis officiis quidem suscipit, id sapiente? Nobis expedita rem quaerat. Atque, est!</p>
          <div className="posts__msg-btns">
            <div className="posts__likes-div">
              <div class="posts__like-btn">
                <FavoriteBorderIcon style={{ fontSize: 25 }} />
              </div>
              <p>3</p>
            </div>
            <div className="posts__more-btn">
              <MoreHorizIcon style={{ fontSize: 25 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts;
