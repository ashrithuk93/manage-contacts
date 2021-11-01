import { useState, useEffect } from "react";
import { useParams, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addContact, editContact } from "../actions/contacts";

import classes from "./EditForm.module.css";

const EditForm = ({ contacts, addContact, editContact, history }) => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    mName: "",
    address: {
      home: {
        s_name: "",
        s_number: "",
        a_number: "",
        city: "",
        p_code: "",
        country: "",
      },
      work: {
        s_name: "",
        s_number: "",
        a_number: "",
        city: "",
        p_code: "",
        country: "",
      },
      other: {
        s_name: "",
        s_number: "",
        a_number: "",
        city: "",
        p_code: "",
        country: "",
      },
    },
    phone: {
      home: "",
      work: "",
      mobile: "",
      fax: "",
    },
  });

  const params = useParams();
  const [direct, setDirect] = useState(false);

  const setFormOnEdit = () => {
    if (contacts.length === 1) {
      setFormData({
        fName:
          contacts[0].fName && Number(params.id) !== 0 ? contacts[0].fName : "",
        lName:
          contacts[0].lName && Number(params.id) !== 0 ? contacts[0].lName : "",
        mName:
          contacts[0].mName && Number(params.id) !== 0 ? contacts[0].mName : "",
        address: {
          home: {
            s_name:
              contacts[0].address.home.s_name && Number(params.id) !== 0
                ? contacts[0].address.home.s_name
                : "",
            s_number:
              contacts[0].address.home.s_number && Number(params.id) !== 0
                ? contacts[0].address.home.s_number
                : "",
            a_number:
              contacts[0].address.home.a_number && Number(params.id) !== 0
                ? contacts[0].address.home.a_number
                : "",
            city:
              contacts[0].address.home.city && Number(params.id) !== 0
                ? contacts[0].address.home.city
                : "",
            p_code:
              contacts[0].address.home.p_code && Number(params.id) !== 0
                ? contacts[0].address.home.p_code
                : "",
            country:
              contacts[0].address.home.country && Number(params.id) !== 0
                ? contacts[0].address.home.country
                : "",
          },
          work: {
            s_name:
              contacts[0].address.work.s_name && Number(params.id) !== 0
                ? contacts[0].address.work.s_name
                : "",
            s_number:
              contacts[0].address.work.s_number && Number(params.id) !== 0
                ? contacts[0].address.work.s_number
                : "",
            a_number:
              contacts[0].address.work.a_number && Number(params.id) !== 0
                ? contacts[0].address.work.a_number
                : "",
            city:
              contacts[0].address.work.city && Number(params.id) !== 0
                ? contacts[0].address.work.city
                : "",
            p_code:
              contacts[0].address.work.p_code && Number(params.id) !== 0
                ? contacts[0].address.work.p_code
                : "",
            country:
              contacts[0].address.work.country && Number(params.id) !== 0
                ? contacts[0].address.work.country
                : "",
          },
          other: {
            s_name:
              contacts[0].address.other.s_name && Number(params.id) !== 0
                ? contacts[0].address.other.s_name
                : "",
            s_number:
              contacts[0].address.other.s_number && Number(params.id) !== 0
                ? contacts[0].address.other.s_number
                : "",
            a_number:
              contacts[0].address.other.a_number && Number(params.id) !== 0
                ? contacts[0].address.other.a_number
                : "",
            city:
              contacts[0].address.other.city && Number(params.id) !== 0
                ? contacts[0].address.other.city
                : "",
            p_code:
              contacts[0].address.other.p_code && Number(params.id) !== 0
                ? contacts[0].address.other.p_code
                : "",
            country:
              contacts[0].address.other.country && Number(params.id) !== 0
                ? contacts[0].address.other.country
                : "",
          },
        },
        phone: {
          home: {
            c_code:
              contacts[0].phone.home.c_code && Number(params.id) !== 0
                ? contacts[0].phone.home.c_code
                : "",
            number:
              contacts[0].phone.home.number && Number(params.id) !== 0
                ? contacts[0].phone.home.number
                : "",
            a_code:
              contacts[0].phone.home.a_code && Number(params.id) !== 0
                ? contacts[0].phone.home.a_code
                : "",
          },
          work: {
            c_code:
              contacts[0].phone.work.c_code && Number(params.id) !== 0
                ? contacts[0].phone.work.c_code
                : "",
            number:
              contacts[0].phone.work.number && Number(params.id) !== 0
                ? contacts[0].phone.work.number
                : "",
            a_code:
              contacts[0].phone.work.a_code && Number(params.id) !== 0
                ? contacts[0].phone.work.a_code
                : "",
          },
          mobile: {
            c_code:
              contacts[0].phone.mobile.c_code && Number(params.id) !== 0
                ? contacts[0].phone.mobile.c_code
                : "",
            number:
              contacts[0].phone.mobile.number && Number(params.id) !== 0
                ? contacts[0].phone.mobile.number
                : "",
            a_code:
              contacts[0].phone.mobile.a_code && Number(params.id) !== 0
                ? contacts[0].phone.mobile.a_code
                : "",
          },
          fax: {
            c_code:
              contacts[0].phone.fax.c_code && Number(params.id) !== 0
                ? contacts[0].phone.fax.c_code
                : "",
            number:
              contacts[0].phone.fax.number && Number(params.id) !== 0
                ? contacts[0].phone.fax.number
                : "",
            a_code:
              contacts[0].phone.fax.a_code && Number(params.id) !== 0
                ? contacts[0].phone.fax.a_code
                : "",
          },
        },
      });
    }
  };

  useEffect(() => {
    setFormOnEdit();
  }, []);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeHomeAddress = (e) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        home: {
          ...formData.address.home,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeWorkAddress = (e) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        work: {
          ...formData.address.work,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeOtherAddress = (e) => {
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        other: {
          ...formData.address.other,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeHomePhone = (e) => {
    setFormData({
      ...formData,
      phone: {
        ...formData.phone,
        home: {
          ...formData.phone.home,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeWorkPhone = (e) => {
    setFormData({
      ...formData,
      phone: {
        ...formData.phone,
        work: {
          ...formData.phone.work,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeMobilePhone = (e) => {
    setFormData({
      ...formData,
      phone: {
        ...formData.phone,
        mobile: {
          ...formData.phone.mobile,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const onChangeFaxPhone = (e) => {
    setFormData({
      ...formData,
      phone: {
        ...formData.phone,
        fax: {
          ...formData.phone.fax,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      if (Number(params.id) !== 0) {
        editContact(formData, params.id, history);
        console.log(formData);
      } else {
        addContact(formData, history);
      }
      console.log("Success");
    } catch (err) {
      console.log(err.message);
    }
  };

  if (direct) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={submitHandler}>
      <h4>Name:</h4>
      <div className={classes.form}>
        <input
          placeholder="First name"
          name="fName"
          value={formData.fName ? formData.fName : ""}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Last name"
          name="lName"
          value={formData.lName ? formData.lName : ""}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Middle name"
          name="mName"
          value={formData.mName ? formData.mName : ""}
          onChange={(e) => onChange(e)}
          required
        />
        <h4>Address:</h4>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div className={classes.display}>
            <table>
              <tbody>
                <tr>
                  <th>Home</th>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Name"
                      value={
                        formData.address.home.s_name
                          ? formData.address.home.s_name
                          : ""
                      }
                      name="s_name"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Number"
                      value={
                        formData.address.home.s_number
                          ? formData.address.home.s_number
                          : ""
                      }
                      name="s_number"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Apartment Number"
                      value={
                        formData.address.home.a_number
                          ? formData.address.home.a_number
                          : ""
                      }
                      name="a_number"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="City"
                      value={
                        formData.address.home.city
                          ? formData.address.home.city
                          : ""
                      }
                      name="city"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Postal Code"
                      value={
                        formData.address.home.p_code
                          ? formData.address.home.p_code
                          : ""
                      }
                      name="p_code"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Country"
                      value={
                        formData.address.home.country
                          ? formData.address.home.country
                          : ""
                      }
                      name="country"
                      onChange={(e) => onChangeHomeAddress(e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={classes.display}>
            <table>
              <tbody>
                <tr>
                  <th>Work</th>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Name"
                      value={
                        formData.address.work.s_name
                          ? formData.address.work.s_name
                          : ""
                      }
                      name="s_name"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Number"
                      value={
                        formData.address.work.s_number
                          ? formData.address.work.s_number
                          : ""
                      }
                      name="s_number"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Apartment Number"
                      value={
                        formData.address.work.a_number
                          ? formData.address.work.a_number
                          : ""
                      }
                      name="a_number"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="City"
                      value={
                        formData.address.work.city
                          ? formData.address.work.city
                          : ""
                      }
                      name="city"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Postal Code"
                      value={
                        formData.address.work.p_code
                          ? formData.address.work.p_code
                          : ""
                      }
                      name="p_code"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Country"
                      value={
                        formData.address.work.country
                          ? formData.address.work.country
                          : ""
                      }
                      name="country"
                      onChange={(e) => onChangeWorkAddress(e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={classes.display}>
            <table>
              <tbody>
                <tr>
                  <th>Other</th>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Name"
                      value={
                        formData.address.other.s_name
                          ? formData.address.other.s_name
                          : ""
                      }
                      name="s_name"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Street Number"
                      value={
                        formData.address.other.s_number
                          ? formData.address.other.s_number
                          : ""
                      }
                      name="s_number"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Apartment Number"
                      value={
                        formData.address.other.a_number
                          ? formData.address.other.a_number
                          : ""
                      }
                      name="a_number"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="City"
                      value={
                        formData.address.other.city
                          ? formData.address.other.city
                          : ""
                      }
                      name="city"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Postal Code"
                      value={
                        formData.address.other.p_code
                          ? formData.address.other.p_code
                          : ""
                      }
                      name="p_code"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Country"
                      value={
                        formData.address.other.country
                          ? formData.address.other.country
                          : ""
                      }
                      name="country"
                      onChange={(e) => onChangeOtherAddress(e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4>Contact Number:</h4>
        <div style={{ display: "list" }}>
          <div>
            <span style={{ width: "20rem" }}>Home:</span>
            <input
              placeholder="Country Code"
              value={
                formData.phone.home.c_code ? formData.phone.home.c_code : ""
              }
              name="c_code"
              onChange={(e) => onChangeHomePhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Area Code"
              value={
                formData.phone.home.a_code ? formData.phone.home.a_code : ""
              }
              name="a_code"
              onChange={(e) => onChangeHomePhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Number"
              value={
                formData.phone.home.number ? formData.phone.home.number : ""
              }
              name="number"
              onChange={(e) => onChangeHomePhone(e)}
            />
          </div>

          <div>
            Work:
            <input
              placeholder="Country Code"
              value={
                formData.phone.work.c_code ? formData.phone.work.c_code : ""
              }
              name="c_code"
              onChange={(e) => onChangeWorkPhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Area Code"
              value={
                formData.phone.work.a_code ? formData.phone.work.a_code : ""
              }
              name="a_code"
              onChange={(e) => onChangeWorkPhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Number"
              value={
                formData.phone.work.number ? formData.phone.work.number : ""
              }
              name="number"
              onChange={(e) => onChangeWorkPhone(e)}
            />
          </div>

          <div>
            Mobile:
            <input
              placeholder="Country Code"
              value={
                formData.phone.mobile.c_code ? formData.phone.mobile.c_code : ""
              }
              name="c_code"
              onChange={(e) => onChangeMobilePhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Area Code"
              value={
                formData.phone.mobile.a_code ? formData.phone.mobile.a_code : ""
              }
              name="a_code"
              onChange={(e) => onChangeMobilePhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Number"
              value={
                formData.phone.mobile.number ? formData.phone.mobile.number : ""
              }
              name="number"
              onChange={(e) => onChangeMobilePhone(e)}
            />
          </div>

          <div>
            Fax:
            <input
              placeholder="Country Code"
              value={formData.phone.fax.c_code ? formData.phone.fax.c_code : ""}
              name="c_code"
              onChange={(e) => onChangeFaxPhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Area Code"
              value={formData.phone.fax.a_code ? formData.phone.fax.a_code : ""}
              name="a_code"
              onChange={(e) => onChangeFaxPhone(e)}
            />{" "}
            -{" "}
            <input
              placeholder="Number"
              value={formData.phone.fax.number ? formData.phone.fax.number : ""}
              name="number"
              onChange={(e) => onChangeFaxPhone(e)}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <button className={classes.button}>Submit Changes</button>
      <button
        className={classes.button}
        type="button"
        onClick={() => setDirect(true)}
      >
        Cancel
      </button>
    </form>
  );
};

EditForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

export default connect(mapStateToProps, {
  addContact,
  editContact,
})(withRouter(EditForm));
