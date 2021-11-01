import { useParams, Redirect } from "react-router-dom";
import { useState, Fragment } from "react";
import Address from "../display/Address";
import Phone from "../display/Phone";
import { connect } from "react-redux";
import { loadOneContact } from "../actions/contacts";
import PropTypes from "prop-types";

const ContactInfo = ({ contacts, loadOneContact }) => {
  const [edit, setEdit] = useState(false);
  const params = useParams();
  const user = contacts.filter((user) => user._id === params.id);

  const editHandler = async (id) => {
    await loadOneContact(id);
    setEdit(true);
  };

  if (edit) {
    return <Redirect to={`/edit/${params.id}`} />;
  }

  return (
    <div>
      {user.length === 0 && <h5>Loading...</h5>}
      {user.length > 0 && (
        <Fragment>
          <p>
            <b>Name:</b> {user[0].fName} {user[0].mName} {user[0].lName}
            <span
              style={{ paddingLeft: "10px" }}
              onClick={() => editHandler(user[0]._id)}
            >
              <i className="fas fa-edit"></i>
              <span className="hide-sm">Edit</span>
            </span>
          </p>
          <h4>Address:</h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Address
              title="Home"
              data={user[0].address.home ? user[0].address.home : null}
            />
            <Address
              title="Work"
              data={user[0].address.work ? user[0].address.work : ""}
            />
            <Address
              title="Other"
              data={user[0].address.other ? user[0].address.other : ""}
            />
          </div>
          <h4>Phone:</h4>
          <div style={{ display: "list" }}>
            <Phone title="Home" data={user[0].phone.home} />
            <Phone title="Work" data={user[0].phone.work} />
            <Phone title="Mobile" data={user[0].phone.mobile} />
            <Phone title="Fax" data={user[0].phone.fax} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

ContactInfo.propTypes = {
  contacts: PropTypes.array.isRequired,
  loadOneContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, { loadOneContact })(ContactInfo);
