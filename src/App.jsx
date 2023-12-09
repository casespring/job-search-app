import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer"; // Import your Footer component


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
