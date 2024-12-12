import React from "react";
import unu from "./image/Logo.svg";

export const Header = () => {
  return (
    <>
      <header>
        <img className="logo" src={unu} alt="image" />
      </header>
    </>
  );
};
