import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AboutFrame = () => {
  return (
    <Container className="" style={{ minHeight: "65vh" }}>
      <Row>
        <Col style={{ color: "#0f4c81", marginTop: "150px" }}>
          <h2>A Little About Me</h2>
          <p>
            Hey! My name is Ross. I'm an experienced developer with a passion
            for front end design. My principles are continuous learning through
            the creation of real projects.
          </p>
          <p>
            When I'm not coding, I enjoy making music, writing, and being
            outside.
          </p>
        </Col>
        <Col>
          <Image
            src="ross_proffessional.jpg"
            roundedCircle
            style={{ width: "412px", height: "424px", margin: "50px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutFrame;
