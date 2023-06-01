export const initialState = {
  playlist: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO":
      return {
        ...state,
        playlist: [...state.playlist, action.payload],
      };

    case "DELETE_VIDEO":
      return {
        ...state,
        playlist: [...state.playlist.filter((item) => item !== action.payload)],
      };

    default:
      return state;
  }
};
