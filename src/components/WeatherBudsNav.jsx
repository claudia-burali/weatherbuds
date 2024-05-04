import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WBLogo from '../assets/logo2.png';


function WBNav() {
    return (
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand href="#1">
            <img height="50" src={WBLogo} alt="WeatherBuds Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto">
              <Nav.Link href="#Home" className="active">Home</Nav.Link>
              <Nav.Link href="#Explore">Explore</Nav.Link>
              <Nav.Link href="#ClimateBlog">Climate Blog</Nav.Link>
              <Nav.Link href="#WeatherBudsProject">WeatherBuds Project</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"></path>
                </svg>
              </Nav.Link>
              <NavDropdown title={<img height="45" src='https://googleretailtraining.exceedlms.com/assets/student/google/default_avatar-5298a7fcd9a9a0ce0d2b32e9aa826a32cc521cb5249540190792626b75504b39.png' alt="User Avatar" />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#a">My Account</NavDropdown.Item>
                <NavDropdown.Item href="#b">My Cities</NavDropdown.Item>
                <NavDropdown.Item href="#c">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
  
  export default WBNav;
