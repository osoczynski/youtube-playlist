import Cookies from "js-cookie";

export const initialState = {
  playlist: Cookies.get("playlist") ? JSON.parse(Cookies.get("playlist")) : [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEO": {
      const newItem = action.payload;
      const items = [...state.playlist, newItem];
      Cookies.set("playlist", JSON.stringify(items));

      return {
        ...state,
        playlist: items,
      };
    }
    case "DELETE_VIDEO": {
      const deleteitem = action.payload;
      const items = state.playlist.filter((item) => item !== deleteitem);
      Cookies.set("playlist", JSON.stringify(items));
      return {
        ...state,
        playlist: items,
      };
    }
    default:
      return state;
  }
};
