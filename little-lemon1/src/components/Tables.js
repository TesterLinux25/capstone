import React from "react";

export const Tables = (props) => {
  return (
    <div className="table">
      <button
        className="tableButton"
        onClick={props.handleTable}
        disabled={props.isDisabled}
      >
        Choose a table{" "}
        <span className="spant">Tables availables: {props.table}</span>
      </button>
    </div>
  );
};
