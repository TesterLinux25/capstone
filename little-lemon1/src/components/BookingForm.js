import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Reservation } from "./Reservation";
import { Display } from "./Display";
import { useNavigate } from "react-router-dom";
import { Tables } from "./Tables";

export const BookingForm = (props) => {
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [special, setSpecial] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  let tablesnumber = 5;
  const [table, setTable] = useState(tablesnumber);
  const [isDisabled, setIsDisabled] = useState(false);

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
  const numberChange = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    return navigate("/confirmation");
  };
  const handleTable = (e) => {
    e.preventDefault();
    if (table <= 1) {
      setTable("Not tables available at the moment");
      setIsDisabled(true);
    } else {
      setTable((unu) => unu - 1);
    }
  };
  return (
    <>
      <Tables table={table} handleTable={handleTable} isDisabled={isDisabled} />
      <Reservation
        time={time}
        setTime={setTime}
        special={special}
        setSpecial={setSpecial}
        date={date}
        setDate={setDate}
        occasion={occasion}
        selectime={selectime}
        number={number}
        setNumber={setNumber}
        handleSubmit={handleSubmit}
        numberChange={numberChange}
        isDisabled={isDisabled}
      />
      <Display
        time={time}
        date={date}
        number={number}
        special={special}
        table={table}
      />
    </>
  );
};
