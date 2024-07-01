interface ModalProps {
  image: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <img src={image} alt="Selected" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
