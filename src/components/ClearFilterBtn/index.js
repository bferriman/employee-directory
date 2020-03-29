import React from "react";

function ClearFilterBtn(props) {
  return (
    <button className={props.filtered === true ? "btn btn-warning" : "btn btn-warning d-none"} onClick={props.clearFilter}>Clear Filter</button>
  );
}

export default ClearFilterBtn;
