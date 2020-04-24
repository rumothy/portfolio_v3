import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const AboutFrame = () => {
  return (
    <Container
      className=""
      style={{ minHeight: "65vh", background: "#F5F5F5", padding: "50px" }}
      fluid
    >
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            width={256}
            height={256}
            src="ross_proffessional.jpg"
            roundedCircle
          />
        </Col>
      </Row>
      <Row style={{ padding: "0 55px 0 55px" }}>
        <Col
          style={{
            color: "#0f4c81",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>A Little About Me</h2>
          <p>
            Hey! My name is Ross. I'm an experienced developer with a passion
            for front end design.{" "}
          </p>
          <p>
            My principles are continuous learning through the creation of real
            projects.
          </p>
          <p>
            When I'm not coding, I enjoy making music, writing, and being
            outside.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutFrame;
