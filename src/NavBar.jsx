import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
      >
        My Jobs
      </NavLink>
      <NavLink
        to="/add-job"
      >
        Add Job
      </NavLink>
      <NavLink
        to="/learn"
        className="nav-link"
      >
        Learn
      </NavLink>
    </nav>
  );
};

export default NavBar;