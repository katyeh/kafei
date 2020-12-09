import React, { useState, useEffect } from 'react';
import logo from "../../images/kafei-logo.png";
import PostAddIcon from '@material-ui/icons/PostAdd';
import Modal from "react-modal";
import PostForm from './PostForm';
import { getPosts } from "../../store/actions/postActions";
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { deletePost } from "../../store/actions/postActions";
import classnames from 'classnames';
import Post from "./Post";


const Posts = ({ currentUser, isProfile }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteIsOpen, setDelete] = useState(false);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      debugger
      if (currentUser.id) {
        await dispatch(getPosts(currentUser.id))
        console.log(currentUser.id)
        console.log(posts)
      }
    })()
  }, [dispatch, currentUser.id])

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

        {posts && posts[0] && posts.map(post => {
          // let hide = false;
          return(
            <Post key={post.id} post={post} currentUser={currentUser} />
            // <div className="posts__post-container">
            //   <div className="posts__info">
            //     <img className="about__feed-pic" src={logo}></img>
            //     <div className="posts__name">
            //       <h4 className="about__feed-sendername about__feed-text">{currentUser.name}</h4>
            //       <h6>6 days ago</h6>
            //     </div>
            //   </div>
            //   <div className="posts__msg-container">
            //     <p className="about__feed-msg">{post.body}</p>
            //     <div className="posts__msg-btns">
            //       <div className="posts__likes-div">
            //         <div className="posts__like-btn">
            //           <FavoriteBorderIcon style={{ fontSize: 25 }} />
            //         </div>
            //         <p>3</p>
            //       </div>
            //       <div onClick={() => {
            //         hide = !hide
            //         console.log(hide)
            //       }} className="posts__more-btn">
            //         <MoreHorizIcon style={{ fontSize: 25 }} />
            //       </div>
            //     </div>
            //     <div postId={post.id} className="posts__delete">
            //       <CloseIcon style={{ fontSize: 20 }} />
            //       <p onClick={() => deletePost(post.id)}>Delete</p>
            //     </div>
            //   </div>
            // </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Posts;
