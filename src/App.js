import Modal from "./Modal";
import "./Styles/App.css";
import { useState } from "react";

const App = () => {
  const [modal, setModal] = useState(false);

  const ModalHandeler = () => {
    setModal(!modal);
  };

  const handleSaveVideo = () => {};

  return (
    <>
      <div className="container">
        <div>
          <h1 className="headline">My YouTube Resource Gallery</h1>
          <p>
            The perfect app to keep track of valuable resources while learning
            to code. As you come across a helpful video, add the id here.
          </p>
        </div>

        <form className="form">
          <label htmlFor="videoId">Video Id</label>
          <input type="text" name="videoId" placeholder="HSN345J9J" />
          <button onClick={handleSaveVideo}>Save the Video</button>
        </form>

        <ul className="videoContainer"></ul>
      </div>
      {modal && <Modal onClose={ModalHandeler} />}
    </>
  );
};

export default App;
