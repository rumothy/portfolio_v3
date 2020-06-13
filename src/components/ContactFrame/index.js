import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactFrame = () => {
  return (
    <Container
      fluid
      style={{
        minHeight: "25vh",
        color: "#0f4c81",
      }}
    >
      <Row style={{ textAlign: "center" }}>
        <Col />
        <Col>
          <h2 style={{ textAlign: "center", margin: "50px" }}>MY RÉSUMÉ!</h2>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col style={{ textAlign: "center" }}>
          <Button variant="primary">
            <a
              href={`${process.env.PUBLIC_URL}/RossAgginie_resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Grab A Copy
            </a>
          </Button>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default ContactFrame;
