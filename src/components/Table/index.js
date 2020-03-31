import React from "react";
import Employee from "../Employee";
import "./style.css";

function Table(props) {

  return (
    <div className="row">
      <div className="col">
        <table className="mx-auto my-3">
          <thead>
            <tr>
              <th><button className="btn btn-header font-weight-bold" onClick={props.sortByName}>Name <i className="fas fa-sort"></i></button></th>
              <th>Email</th>
              <th>Phone</th>
              <th><button className="btn btn-header font-weight-bold" onClick={props.sortByDept}>Department <i className="fas fa-sort"></i></button></th>
              <th><button className="btn btn-header font-weight-bold" onClick={props.sortByHire}>Hire Date <i className="fas fa-sort"></i></button></th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map( emp => {
              return <Employee data={emp} key={emp.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;