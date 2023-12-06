import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <Link to="/" style={{ padding: '10px', textDecoration: 'none', color: 'inherit' }}>
        My Jobs
      </Link>
      <Link to="/add-job" style={{ padding: '10px', textDecoration: 'none', color: 'inherit' }}>
        Add Job
      </Link>
      <Link to="/learn" style={{ padding: '10px', textDecoration: 'none', color: 'inherit' }}>
        Learn
      </Link>
    </nav>
  );
}

export default NavBar;
