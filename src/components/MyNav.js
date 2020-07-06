import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class MyNav extends Component {
  render() {
    return (
      <Nav defaultActiveKey="#" as="ul">
        <Nav.Item as="li">
          <Nav.Link style={{ color: "#0f4c81", height: "32px" }} href="#">
            Ross Agginie
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="experiencesLink" href="#experience">
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="servicesLink" href="#services">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="portfolioLink" href="#portfolio">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="contactLink" href="#contact">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="aboutLink" href="#about">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default MyNav;
