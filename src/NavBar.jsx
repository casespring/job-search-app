import React from "react";
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBar() {
  return (
    <Nav className="justify-content-center" activeKey="/">
      <LinkContainer to="/">
        <Nav.Link>My Jobs</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/add-job">
        <Nav.Link>Add Job</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/learn">
        <Nav.Link className="nav-link">Learn</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}

export default NavBar;


