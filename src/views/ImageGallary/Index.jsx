import React, { useState } from 'react';
import Modal from 'react-modal';
// import './ImageGallary.css'
const Index = ({ images }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const openModal = (image) => {
      setSelectedImage(image);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setModalIsOpen(false);
    };
  
    return (
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-thumbnail">
            <img
              src={image}
              alt={`Image ${index}`}
              onClick={() => openModal(image)}
            />
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <button onClick={closeModal} className="close-button">
            Close
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Image"
              className="modal-image"
            />
          )}
        </Modal>
      </div>
    );
}

export default Index