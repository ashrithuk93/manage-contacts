import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./EditForm.module.css";

const EditForm = () => {
  const params = useParams();

  useEffect(() => {
    const loadContacts = async () => {
      const res = await axios.get("/api/contacts");
      const user = res.data.filter((user) => user._id === params.id);

      console.log(user);

      if (user) {
        setFormData({
          fName: user[0].fName,
          lName: user[0].lName,
          mName: user[0].mName,
          address: {
            home: user[0].address.home,
            work: user[0].address.work,
            other: user[0].address.other,
          },
          phone: {
            home: user[0].phone.home,
            work: user[0].phone.work,
            mobile: user[0].phone.mobile,
            fax: user[0].phone.fax,
          },
        });
      }
    };

    loadContacts();
  }, [params.id]);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    mName: "",
    address: {
      home: "",
      work: "",
      other: "",
    },
    phone: {
      home: "",
      work: "",
      mobile: "",
      fax: "",
    },
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form}>
        <input
          placeholder="First name"
          name="fName"
          value={formData.fName}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Last name"
          name="lName"
          value={formData.lName}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Middle name"
          name="mName"
          value={formData.mName}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          placeholder="Home Address"
          name="address.home"
          value={formData.address.home}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Work Address"
          name="address.work"
          value={formData.address.work}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Other Address"
          name="address.other"
          value={formData.address.other}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Home Phone"
          name="phone.home"
          value={formData.phone.home}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Work Phone"
          name="phone.work"
          value={formData.phone.work}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Mobile Phone"
          name="phone.mobile"
          value={formData.phone.mobile}
          onChange={(e) => onChange(e)}
        />
        <input
          placeholder="Fax"
          name={`phone.fax`}
          value={formData.phone.fax}
          onChange={(e) => onChange(e)}
        />
      </div>
      <br />
      <br />
      <button className={classes.button} type="button">
        Submit Changes
      </button>
    </form>
  );
};

export default EditForm;
