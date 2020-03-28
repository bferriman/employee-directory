import React from "react";
import Employee from "../Employee";

function Table(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Department</th>
        <th>Hire Date</th>
      </tr>
      {props.employees.map( emp => {
        return <Employee data={emp} />;
      })}
    </table>
  );
}

export default Table;