import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "./Main";

export const Reservation = (props) => {
  return (
    <>
      <div className="myform">
        <form onSubmit={props.handleSubmit}>
          <label for="res-date" className="mylabel">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={props.date}
            onChange={(e) => props.setDate(e.target.value)}
            required
            disabled={props.isDisabled}
          />
          <label for="res-time" className="mylabel">
            Choose time
          </label>
          <select
            id="res-time "
            onChange={(e) => props.setTime(e.target.value)}
            disabled={props.isDisabled}
            required
          >
            {props.selectime.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
          <label for="guests" className="mylabel">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={props.number}
            onChange={props.numberChange}
            disabled={props.isDisabled}
            required
          />
          <label for="occasion" className="mylabel">
            Occasion
          </label>
          <select
            id="occasion"
            disabled={props.isDisabled}
            onChange={(e) => props.setSpecial(e.target.value)}
          >
            {props.occasion.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
          <input
            type="submit"
            value="Make Your reservation"
            disabled={props.isDisabled}
            className="mybutton"
          />
        </form>
      </div>
    </>
  );
};
