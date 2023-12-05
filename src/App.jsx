import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import './App.css'; // Import your custom styles

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export default App;
