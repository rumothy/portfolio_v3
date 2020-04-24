import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class MyNav extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link style={{ color: "#0f4c81", height: "32px" }} href="/home">
            Ross Agginie
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="experiencesLink">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="servicesLink">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="portfolioLink">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="contactLink">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="aboutLink">About</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default MyNav;
