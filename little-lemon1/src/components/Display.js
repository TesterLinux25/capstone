import React from "react";

export const Display = (props) => {
  return (
    <div className="display1">
      <div className="display">
        <h1>Your booking</h1>

        <p>Date: {props.date}</p>
        <p>Time: {props.time}</p>
        <p>Number of guests: {props.number}</p>
        <p>{props.special}</p>
      </div>
    </div>
  );
};
