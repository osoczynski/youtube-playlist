import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useReducer } from "react";
import { initialState, reducer } from "./Playlist";
import "./Styles/App.css";

const App = () => {
  const [modal, setModal] = useState(false);
  const [val, setVal] = useState("");
  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const playlist = state.playlist;

  const saveVideoHandler = (e) => {
    e.preventDefault();
    if (val === "") return;
    const id = val.split("watch?v=").pop();
    if (playlist.includes(id)) {
      setVal("Video is already in playlist");
      return;
    }
    dispatch({
      type: "ADD_VIDEO",
      payload: id,
    });
    setVal("");
  };

  const deleteVideoHandler = (item) => {
    dispatch({
      type: "DELETE_VIDEO",
      payload: item,
    });
  };

  const playVideoHandler = (item) => {
    setModal(`https://www.youtube.com/embed/${item}`);
  };

  const closeModal = () => {
    setModal(false);
  };

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
          <label htmlFor="videoId">Video Link</label>
          <input
            type="text"
            id="videoId"
            placeholder="www.youtube.com/XYZ"
            value={val}
            onChange={handleChange}
          />
          <button onClick={saveVideoHandler}>Save the Video</button>
        </form>
      </div>
      <ul className="videosContainer">
        {playlist.map((item) => (
          <li key={item}>
            <img
              src={`https://i3.ytimg.com/vi/${item}/sddefault.jpg`}
              alt="Cover img for the video"
              className="thumbnail"
              onClick={() => {
                playVideoHandler(item);
              }}
            />
            <button
              className="deleteBtn"
              onClick={() => {
                deleteVideoHandler(item);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
        ))}
      </ul>

      {modal && <Modal onClose={closeModal} link={modal} />}
    </>
  );
};

export default App;
