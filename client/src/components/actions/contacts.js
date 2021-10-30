import axios from "axios";
import {
  ADD_CONTACT,
  ERROR_HANDLING,
  LOAD_CONTACTS,
  DELETE_CONTACT,
} from "./types";

// export const getCurrentProfile = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/api/profile/me");
//     dispatch({ type: GET_PROFILE, payload: response.data });
//   } catch (err) {
//     dispatch({
//       type: PROFILE_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

export const loadContacts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/contacts");

    dispatch({
      type: LOAD_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const addContact = (data) => async (dispatch) => {
  try {
    const body = JSON.stringify(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/contacts", body, config);

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/contacts/${id}`);

    dispatch({
      type: DELETE_CONTACT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};
