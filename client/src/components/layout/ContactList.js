import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [uid, setUid] = useState(null);
  const [add, setAdd] = useState(false);

  const loadContacts = async () => {
    const res = await axios.get("/api/contacts");
    setContacts(res.data);

    console.log(res.data);
  };
  useEffect(() => {
    loadContacts();
  }, []);

  if (uid !== null) {
    return <Redirect to={`/${uid}`} />;
  }

  const deleteHandler = async (id) => {
    await axios.delete(`/api/contacts/${id}`);
    loadContacts();
  };

  if (add) {
    return <Redirect to="/edit/0" />;
  }

  return (
    <div>
      <ol>
        {contacts !== null &&
          contacts.map((contact) => (
            <li>
              <span onClick={() => setUid(contact._id)}>
                {contact.fName} {contact.lName}{" "}
              </span>
              <button type="button" onClick={() => deleteHandler(contact._id)}>
                Delete
              </button>
            </li>
          ))}
      </ol>
      {contacts === null && <p>No contcats to display</p>}
      <button onClick={() => setAdd(true)}>Add Contact</button>
    </div>
  );
};

export default ContactList;
