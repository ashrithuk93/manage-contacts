import {
  LOAD_CONTACTS,
  ADD_CONTACT,
  ERROR_HANDLING,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [],
  msg: "",
};

export default function profile(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_CONTACTS:
    case ADD_CONTACT:
    case EDIT_CONTACT:
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: payload,
      };

    case ERROR_HANDLING:
      return {
        ...state,
        msg: "Action Failed",
      };

    default:
      return state;
  }
}
