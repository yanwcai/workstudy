import React from "react";
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Website Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="blogs">Blogs</Nav.Link>

            <NavDropdown title="Content" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Content One</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Content Two
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Content Three</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

            <NavDropdown title="Community" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Learning Community
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;