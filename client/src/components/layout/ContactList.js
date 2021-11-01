import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {
  loadContacts,
  deleteContact,
  loadOneContact,
  searchContact,
  sortContact,
} from "../actions/contacts";
import { setAlert } from "../actions/alert";

import Spinner from "./Spinner";

import classes from "./ContactList.module.css";

const ContactList = ({
  contacts,
  loadContacts,
  deleteContact,
  loadOneContact,
  searchContact,
  sortContact,
  setAlert,
}) => {
  const [uid, setUid] = useState(null);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const deleteHandler = async (id) => {
    await deleteContact(id);
    loadContacts();
    setEdit("");
  };

  const editHandler = async (id) => {
    await loadOneContact(id);
    setEdit(id);
  };

  const searchHandler = (e) => {
    searchContact(search);
  };

  if (uid !== null) {
    return <Redirect to={`/${uid}`} />;
  }

  if (add) {
    return <Redirect to="/edit/0" />;
  }

  if (edit) {
    return <Redirect to={`/edit/${edit}`} />;
  }

  return (
    <div className={classes.display}>
      <table>
        <tbody>
          <tr>
            <th>
              <input
                className={classes.search}
                placeholder="Enter Name to Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                style={{
                  padding: "7px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
                type="button"
                onClick={searchHandler}
              >
                Search
              </button>
            </th>
            <td>
              <span onClick={() => setAdd(true)}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span className="hide-sm">Add</span>
              </span>
            </td>
            <td>
              <span
                type="button"
                onClick={() => {
                  setSort(true);
                  sortContact();
                  console.log(sort);
                }}
              >
                <i className="fas fa-sort"></i>
                <span className="hide-sm">Sort</span>
              </span>
            </td>
            <td>
              <span onClick={() => loadContacts()}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
                <span className="hide-sm">Reset</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {contacts.length > 0 &&
        contacts.map((contact) => (
          <table key={contact._id}>
            <tbody>
              <tr>
                <th>
                  <span onClick={() => setUid(contact._id)}>
                    {contact.fName} {contact.lName}{" "}
                  </span>
                </th>
                <td>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => deleteHandler(contact._id)}
                  ></i>
                </td>
                <td>
                  <i
                    className="fas fa-edit"
                    onClick={() => editHandler(contact._id)}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        ))}

      {contacts.length === 0 && <Spinner />}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  loadContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  loadOneContact: PropTypes.func.isRequired,
  searchContact: PropTypes.func.isRequired,
  sortContact: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, {
  loadContacts,
  deleteContact,
  loadOneContact,
  searchContact,
  sortContact,
  setAlert,
})(ContactList);
