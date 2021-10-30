import React from "react";
import classes from "./Address.module.css";

const Address = ({
  title,
  data: { s_name, s_number, a_number, city, p_code, country },
}) => {
  return (
    <div className={classes.display}>
      <table>
        <tr>
          <th colSpan={2}>{title}</th>
        </tr>
        <tr>
          <td>Street Name:</td>
          <td>{s_name ? s_name : ""}</td>
        </tr>
        <tr>
          <td>Street Number:</td>
          <td>{s_number ? s_number : ""}</td>
        </tr>
        <tr>
          <td>Apartment Number:</td>
          <td>{a_number ? a_number : ""}</td>
        </tr>
        <tr>
          <td>City:</td>
          <td>{city ? city : ""}</td>
        </tr>
        <tr>
          <td>Postal Code:</td>
          <td>{p_code ? p_code : ""}</td>
        </tr>
        <tr>
          <td>Contry:</td>
          <td>{country ? country : ""}</td>
        </tr>
      </table>
    </div>
  );
};

export default Address;
