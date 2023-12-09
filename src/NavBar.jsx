import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  return (
    <nav>
      <div className="nav-title">
      JobQuest
      </div>
      <Link to="/">
        Home
      </Link>
      <Link to="/jobs">
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

