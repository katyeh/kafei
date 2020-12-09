import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Modal from "react-modal";
import PostForm from './PostForm';
import { getPosts } from "../../store/actions/postActions";
import Post from "./Post";

const Posts = ({ currentUser, isProfile }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
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
  }, [])

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
          return(
            <Post key={post.id} post={post} currentUser={currentUser} />
          )
        })
        }
      </div>
    </div>
  )
}

export default Posts;
