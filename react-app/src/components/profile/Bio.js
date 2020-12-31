import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';
import { updateBio } from "../../store/actions/currentUser";


const Bio = ({ currentUser, isProfile }) => {
  const dispatch = useDispatch();
  const [bio, setBio] = useState("")
  const [modalIsOpen, setIsOpen] = useState(false);

  const onUpdate = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('bio', bio)
    formData.append('user_id', currentUser.id)
    await dispatch(updateBio(formData, currentUser.id))
    setIsOpen(false);
  }

  const updateBioInput = (e) => {
    setBio(e.target.value)
    console.log(bio)
  };

  return (
    <div className="bio">
      <div className="about__label about__bio-label">
        <h3>About</h3>
        <div onClick={() => setIsOpen(true)} className="bio-edit">
          <EditIcon style={{ fontSize: 20 }} />
        </div>
      </div>
      <div className="about__content about__bio-content">
        <p className="about__bio">{currentUser.bio}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Login Modal"
        className="login-modal"
        overlayClassName="overlay"
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={500}
      >
        <form onSubmit={onUpdate}>
          <div className="login-header">
            <h1>Edit Bio</h1>
            <div className="modal__close">
              <CloseIcon
                style={{ fontSize: 30 }}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <div className="bio__content">
            <textarea
              className="bio__field"
              type="text"
              name="bio"
              onChange={updateBioInput}
              value={bio}
              placeholder="Describe yourself..."
            />
          </div>
          <button className="bio__modal-btn" type="submit">Save</button>
        </form>
      </Modal>
    </div>
  )
}

export default Bio;
