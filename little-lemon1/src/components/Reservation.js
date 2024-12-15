import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "./Main";
import { useNavigate } from "react-router-dom";

export const Reservation = () => {
  const [number, setNumber] = useState("");

  const [time, setTime] = useState("");
  const [special, setSpecial] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const selectime = [
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
    { label: "23:00", value: "23:00" },
  ];
  const occasion = [
    { label: "", value: "" },
    { label: "Birthday", value: "Birthday" },
    { label: "Anniversary", value: "Anniversary" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `You reserved on ${date} at ${time} \n Number of guests: ${number} \n Special ocassion: ${special} `
    );
    // console.log(number, time, special);
    return navigate("/confirmation");
  };
  return (
    <>
      <div className="myform">
        <form onSubmit={handleSubmit}>
          <label for="res-date" className="mylabel">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label for="res-time" className="mylabel">
            Choose time
          </label>
          <select
            id="res-time "
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {selectime.map((option) => (
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <label for="occasion" className="mylabel">
            Occasion
          </label>
          <select id="occasion" onChange={(e) => setSpecial(e.target.value)}>
            {occasion.map((option) => (
              <option value={option.value}>{option.value}</option>
            ))}
          </select>
          <input
            type="submit"
            value="Make Your reservation"
            className="mybutton"
          />
        </form>
      </div>
    </>
  );
};
