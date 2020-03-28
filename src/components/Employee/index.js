import React from "react";

function Employee(props) {

  const printDate = (date) => {
    return date.format("MMM D YYYY");
  }

  return (
    <tr>
      <td>{props.data.name.last}, {props.data.name.first}</td>
      <td>{props.data.email}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.dept}</td>
      <td>{printDate(props.data.hire)}</td>
    </tr>
  );
}

export default Employee;