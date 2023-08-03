import "./Modal.css";

function Modal({ title, clicked }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={clicked}
          >
            Cancel
          </button>
          <button className="btn" onClick={clicked}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
