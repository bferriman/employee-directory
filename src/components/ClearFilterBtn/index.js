import React from "react";
import "./style.css";

function ClearFilterBtn(props) {
  return (
    <button className={props.filtered === true ? "btn btn-clr-filter font-weight-bold" : "btn btn-clr-filter font-weight-bold d-none"} onClick={props.clearFilter}>Clear Filter</button>
  );
}

export default ClearFilterBtn;
