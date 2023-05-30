import "./Styles/Modal.css";

const Modal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal">
        <button className="closeBtn" onClick={props.onClose}></button>
        <iframe></iframe>
      </div>
    </>
  );
};

export default Modal;
