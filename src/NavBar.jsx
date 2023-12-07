import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav>
      <Link to="/">
        My Jobs
      </Link>
      <Link to="/add-job">
        Add Job
      </Link>
      <Link to="/learn" >
        Learn
      </Link>
    </nav>
  );
}

export default NavBar;

