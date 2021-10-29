import { useParams, Redirect } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";

const ContactInfo = () => {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);
  const params = useParams();

  useEffect(() => {
    const loadContacts = async () => {
      const res = await axios.get("/api/contacts");
      const user = res.data.filter((user) => user._id === params.id);
      setUser(res.data);

      console.log(user);
    };

    loadContacts();
  }, [params.id]);

  if (edit) {
    return <Redirect to={`/edit/${params.id}`} />;
  }

  return (
    <div>
      {user === null && <h5>Loading...</h5>}
      {user !== null && (
        <Fragment>
          <p>
            <b>Name:</b> {user[0].fName} {user[0].mName} {user[0].lName}
          </p>
          <p>
            <b>Address</b>
          </p>
          <ul>
            <li>
              Home: {user[0].address.home ? user[0].address.home : "None"}
            </li>
            <li>
              {" "}
              Work: {user[0].address.work ? user[0].address.work : "None"}
            </li>
            <li>
              {" "}
              Other: {user[0].address.other ? user[0].address.other : "None"}
            </li>
          </ul>
          <p>
            <b>Phone</b>
          </p>
          <ul>
            <li>Home: {user[0].phone.home ? user[0].phone.home : "None"}</li>
            <li>Work: {user[0].phone.work ? user[0].phone.work : "None"}</li>
            <li>
              Mobile: {user[0].phone.other ? user[0].phone.other : "None"}
            </li>
            <li>Fax: {user[0].phone.other ? user[0].phone.other : "None"}</li>
          </ul>
          <button type="button" onClick={() => setEdit(true)}>
            Edit
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default ContactInfo;
