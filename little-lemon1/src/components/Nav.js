import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Main } from "./Main";
import { About } from "./About";
import { Menu } from "./Menu";
import { Reservation } from "./Reservation";
import { OrderOnline } from "./OrderOnline";
import { Login } from "./Login";
import { Header } from "./Header";
import { Confirmation } from "./Confirmation";

export const Nav = () => {
  return (
    <>
      <div className="top1">
        <Header />
        <nav>
          <ul>
            <li className="uinav">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="link" to="/reservations">
                Reservations
              </Link>
            </li>
            <li>
              <Link className="link" to="/orderonline">
                Order Online
              </Link>
            </li>
            <li>
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
};
