import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Logo from "../images/SFU_block_logo.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import "./Navigation.css";

function MyNavbar() {
  return (
    <div className="navbar-container">
    <Navbar className="navbar navbar-expand-lg m-0 shadow" style={{backgroundColor: '#A6192E', color: 'white'}}> 
      <Container fluid className="p-0" style={{backgroundColor: '#A6192E', fontSize: "18px"}}>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white', display: 'flex', alignItems: 'center'}}>
          <img
            src={Logo}
            alt="Logo"
            height="60"
            className="d-inline-block align-top me-3 mb-2"
          />
          <span style={{ fontSize: '24px', marginLeft: '8px' }}>AI Lab</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" style={{backgroundColor: '#A6192E'}}> 
            
            <NavDropdown title="About" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/about" id="submenu">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/about/people" id="submenu">People</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/values" id="submenu">Values</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/faculty-publications" id="submenu">Faculty Publications</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/corporate-programs" id="submenu">Corporate Programs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/get-involved" id="submenu">Get Involved</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/research" id="submenu">Research</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/research/fellowship-programs" id="submenu">Fellowship Programs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research/grant-programs" id="submenu">Grant Programs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research/ai-index-2023" id="submenu">AI Index 2023</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research/student-affinity-groups" id="submenu">Student Affinity Groups</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/education" id="submenu">Education</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/education/education-audiences" id="submenu">Education Audiences</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/education/courses" id="submenu">Courses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/education/executive-education" id="submenu">Executive Education</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Policy" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/policy" id="submenu">Policy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/policy/policy-publications" id="submenu">Policy Publications</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/policy/national-ai-research-resource" id="submenu">National AI Research Resource</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/policy/congressional-boot-camp-on-ai" id="submenu">Congressional Boot Camp on AI</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/policy/tech-ethics-policy-summer-fellowships" id="submenu">Tech Ethics & Policy Summer Fellowships</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/policy/ai-audit-challenge" id="submenu">AI Audit Challenge</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/news" id="submenu">News</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/News/blog" id="submenu">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/News/announcements" id="submenu">Announcements</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/News/media-mentions" id="submenu">Media Mentions</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/News/subscribe-to-newsletter" id="submenu">Subscribe to Newsletter</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/events" id="submenu">Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/events/upcoming-events" id="submenu">Upcoming Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/past-events" id="submenu">Past Events</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events/seminars" id="submenu">Seminars</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="partners" id="basic-nav-dropdown">Partners</Nav.Link>

          </Nav>

          <Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className=" mr-sm-2"
                aria-label="Search"
              />
              <Button variant="outline-light">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
  
}

export default MyNavbar;

// Reference: https://react-bootstrap.netlify.app/docs/components/navbar