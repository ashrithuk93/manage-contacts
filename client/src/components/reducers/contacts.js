import {
  LOAD_CONTACTS,
  LOAD_ONE_CONTACT,
  ADD_CONTACT,
  ERROR_HANDLING,
  EDIT_CONTACT,
  DELETE_CONTACT,
  SEARCH_CONTACT,
  SORT_CONTACT,
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

    case LOAD_ONE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (item) => item._id.toString() === payload.toString()
        ),
      };

    case SEARCH_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (item) =>
            item.fName
              .concat(item.lName)
              .toLowerCase()
              .indexOf(payload.toLowerCase().replaceAll(/\s/g, "")) !== -1
        ),
      };

    case SORT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.sort((a, b) => (a.fName > b.fName ? 1 : -1)),
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
