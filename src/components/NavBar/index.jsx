import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


const NavbarStyle = {
  background: "rgba(0,0,0,0.3)",
  padding: "15px 5px",
  boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 5px 0px"
};

const ContainerStyle = {
  padding: "0px 15px",
  margin: "0px 47px"
};

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      <Navbar
        style={NavbarStyle}
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        defaultActiveKey="/home"
      >
        <Container style={ContainerStyle}>
          <Navbar.Brand href="#home">
            <img
              src="http://icm-starkville.org/images/logo.png"
              alt="Islamic Center of Mississippi"
              height="70"
              width="170"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="active" href="Grid">Home</Nav.Link>
              <NavDropdown title="About Us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/education">Education</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/events">Events</Nav.Link>
              <Nav.Link href="/resources">Resources </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" style={{borderStyle:'inset',padding:'10px'}}>
                <i className="fa fa-envelope" aria-hidden="true" style={{paddingRight:'10px'}}/>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
