import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Tables } from "./components/Tables";
import React, { useState } from "react";

function App() {
  return (
    <>
      <div>
        <Nav />
      </div>

      <Footer />
    </>
  );
}

export default App;
