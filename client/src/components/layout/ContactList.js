import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { loadContacts, deleteContact } from "../actions/contacts";

import classes from "./ContactList.module.css";

const ContactList = ({ contacts, loadContacts, deleteContact }) => {
  // const [contacts, setContacts] = useState(contactsFromRedux || []);
  const [uid, setUid] = useState(null);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  if (uid !== null) {
    return <Redirect to={`/${uid}`} />;
  }

  const deleteHandler = async (id) => {
    await deleteContact(id);
    await loadContacts();
  };

  if (add) {
    return <Redirect to="/edit/0" />;
  }

  if (edit) {
    return <Redirect to={`/edit/${edit}`} />;
  }

  return (
    <div>
      <div className={classes.display}>
        <table>
          <tr>
            <th></th>
            <td onClick={() => setAdd(true)}>
              <i className="fa fa-plus" aria-hidden="true"></i>
              <nobr />
              <span className="hide-sm">Add</span>
            </td>
            <td>
              <i className="fas fa-sort"></i>
              <nobr />
              <span className="hide-sm">Sort</span>
            </td>
          </tr>
        </table>
        <br />
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <table key={contact._id}>
              <tr>
                <th onClick={() => setUid(contact._id)}>
                  {contact.fName} {contact.lName}{" "}
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
                    onClick={() => setEdit(contact._id)}
                  ></i>
                </td>
              </tr>
            </table>
          ))}
      </div>
      {contacts === null && <p>No contcats to display</p>}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  loadContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, { loadContacts, deleteContact })(
  ContactList
);
