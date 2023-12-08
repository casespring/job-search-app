import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer"; // Import your Footer component
import "./App.css"; // Import your custom styles

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer /> 
    </>
  );
}

export default App;
