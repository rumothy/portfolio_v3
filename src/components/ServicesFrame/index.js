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
      <h2 style={{ textAlign: "center", margin: "50px" }}>Services</h2>
      <Row>
        <Col>
          <Card>
            <Card.Header>Web development</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>I build websites!</p>
                {/* <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer> */}
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
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicesFrame;
