import Modal from "react-modal";
import React from "react";
import { useSearch } from "../../searchContext";

function ImageModal() {
  const { currentImg, modalIsOpen, setModalIsOpen } = useSearch();
  function closeModal() {
    setModalIsOpen(false);
  }
  if (modalIsOpen && currentImg) {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <img src={currentImg.urls.regular} alt={currentImg.alt_description} />
      </Modal>
    );
  }
}
export default ImageModal;
