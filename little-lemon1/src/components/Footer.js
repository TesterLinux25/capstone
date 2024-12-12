import React from "react";
import { Nav } from "./Nav";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";
import { Menu } from "./Menu";
import { Reservation } from "./Reservation";
import { OrderOnline } from "./OrderOnline";
import { Login } from "./Login";
import { Header } from "./Header";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="footer2">
            Doormat Navigation
            <div>
              <Link className="footer3" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="footer3" to="about">
                About
              </Link>
            </div>
            <div>
              <Link className="footer3" to="menu">
                Menu
              </Link>
            </div>
            <div>
              <Link className="footer3" to="reservations">
                Reservation
              </Link>
            </div>
            <div>
              <Link className="footer3" to="orderonline">
                Order Online
              </Link>
            </div>
            <div>
              <Link className="footer3" to="login">
                Login
              </Link>
            </div>
          </div>
          <div className="footer2">Contact</div>
          <div className="footer2">Social Media Links</div>
        </div>
      </footer>
    </>
  );
};
