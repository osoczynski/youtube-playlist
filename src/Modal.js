import "./Styles/Modal.css";

const Modal = (props) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <iframe
        onClick={(e) => e.stopPropagation()}
        src={props.link}
        title="video"
        width="560"
        height="315"
        frame-border="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
