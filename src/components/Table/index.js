import React from "react";
import Employee from "../Employee";

function Table(props) {

  return (
    <table>
      <thead>
        <tr>
          <th><button className="btn font-weight-bold" onClick={props.sortByName}>Name <i className="fas fa-sort"></i></button></th>
          <th>Email</th>
          <th>Phone</th>
          <th><button className="btn font-weight-bold" onClick={props.sortByDept}>Department <i className="fas fa-sort"></i></button></th>
          <th><button className="btn font-weight-bold" onClick={props.sortByHire}>Hire Date <i className="fas fa-sort"></i></button></th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map( emp => {
          return <Employee data={emp} key={emp.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;