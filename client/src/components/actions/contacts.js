import axios from "axios";
import {
  ADD_CONTACT,
  ERROR_HANDLING,
  LOAD_CONTACTS,
  LOAD_ONE_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SEARCH_CONTACT,
  SORT_CONTACT,
} from "./types";

import { setAlert } from "./alert";

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

    // setAlert("Loaded All the Contacts", "success");
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const loadOneContact = (id) => (dispatch) => {
  try {
    dispatch({
      type: LOAD_ONE_CONTACT,
      payload: id,
    });

    // setAlert("Loaded Selected Contact", "success");
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const searchContact = (search) => (dispatch) => {
  try {
    dispatch({
      type: SEARCH_CONTACT,
      payload: search,
    });

    // console.log(search, "search from redux action");
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const sortContact = () => (dispatch) => {
  try {
    dispatch({
      type: SORT_CONTACT,
    });
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const addContact = (data, history) => async (dispatch) => {
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

    history.push("/");
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};

export const editContact = (data, id, history) => async (dispatch) => {
  try {
    const body = JSON.stringify(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(`/api/contacts/${id}`, body, config);

    dispatch({
      type: EDIT_CONTACT,
      payload: res.data,
    });

    history.push("/");
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

    // setAlert("Successfully Deleted the Contact", "success");
  } catch (err) {
    dispatch({
      type: ERROR_HANDLING,
    });
  }
};
