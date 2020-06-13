import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServicesFrame = () => {
  return (
    <Container
      fluid
      style={{
        minHeight: "65vh",
        color: "#0f4c81",
      }}
    >
      <Row style={{ textAlign: "center" }}>
        <Col />
        <Col>
          <h2 style={{ textAlign: "center", margin: "50px" }}>WHAT I CAN DO</h2>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Fullstack web development</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>I build websites!</p>
                <ul>
                  <li>MongoDB</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Application development</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>I write applications!</p>
                <ul>
                  <li>Software Architecture</li>
                  <li>Domain Driven Design</li>
                  <li>DevOps</li>
                  <li>Clean Code</li>
                </ul>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesFrame;
