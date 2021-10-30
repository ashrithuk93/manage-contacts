import React from "react";
import classes from "./Phone.module.css";

const Phone = ({ title, data: { c_code, number, a_code } }) => {
  return (
    <div className={classes.display}>
      <table>
        <tr>
          <td>{title}:</td>
          <td>
            {c_code}-{a_code}-{number}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Phone;
