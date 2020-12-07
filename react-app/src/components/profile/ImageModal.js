import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from "../../services/auth";

const ImageModal = ({ showModal, hideModal }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="modal">
      <section className="modal-main">
        <button onClick={hideModal()}>close</button>
        <button type="submit">Post photo</button>
      </section>
    </div>
  )
}

export default ImageModal;
