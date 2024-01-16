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
    // bg-body-tertiary 
    <Navbar className="navbar navbar-expand-lg m-0" style={{backgroundColor: '#A6192E', color: 'white'}}> 
      <Container fluid className="p-0" style={{backgroundColor: '#A6192E'}}>
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
            
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="#people" id="submenu">People</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#values" id="submenu">Values</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#faculty_publications" id="submenu">Faculty Publications</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#corporate_programs" id="submenu">Corporate Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#get_involved" id="submenu">Get Involved</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research" id="basic-nav-dropdown">
              <NavDropdown.Item href="#fellowship_programs" id="submenu">Fellowship Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#grant_programs" id="submenu">Grant Programs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ai_index_2023" id="submenu">AI Index 2023</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#student_affinity_groups" id="submenu">Student Affinity Groups</NavDropdown.Item>
            </NavDropdown>

            

            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="#education_audiences" id="submenu">Education Audiences</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#courses" id="submenu">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#executive_education" id="submenu">Executive Education</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Policy" id="basic-nav-dropdown">
              <NavDropdown.Item href="#policy_publications" id="submenu">Policy Publications</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#national_ai_research_resource" id="submenu">National AI Research Resource</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#congressional_boot_camp_on_ai" id="submenu">Congressional Boot Camp on AI</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tech_ethics_policy_summer_fellowships" id="submenu">Tech Ethics & Policy Summer Fellowships</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#ai_audit_challenge" id="submenu">AI Audit Challenge</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="News" id="basic-nav-dropdown">
              <NavDropdown.Item href="#blog" id="submenu">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#announcements" id="submenu">Announcements</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#media_mentions" id="submenu">Media Mentions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#subscribe_to_newsletter" id="submenu">Subscribe to Newsletter</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Events" id="basic-nav-dropdown">
              <NavDropdown.Item href="#upcoming_events" id="submenu">Upcoming Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#past_events" id="submenu">Past Events</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#seminars" id="submenu">Seminars</NavDropdown.Item>
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
  );
}

export default MyNavbar;

// Reference: https://react-bootstrap.netlify.app/docs/components/navbar