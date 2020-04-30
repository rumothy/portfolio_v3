import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//src={`${process.env.PUBLIC_URL}/logo192.png`}

//src="https://placehold.it/200x200?text=SecondText"

function getImages() {
  let images = [];
  for (let i = 0; i < 18; i++) {
    images.push(`https://placehold.it/127x127?text=Icon ${i + 1}`);
  }
  return images;
}

function ExperienceFrame(props) {
  const images = getImages();
  return (
    <Container
      fluid
      style={{
        minHeight: "50vh",
        background: "#F5F5F5",
        color: "#0f4c81",
      }}
    >
      <h2>Experience</h2>
      <Row style={{ textAlign: "center" }}>
        {" "}
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        {images.slice(0, 6).map((image) => (
          <Col key={image} style={{ padding: "0px 15px 15px" }}>
            <Image src={image} />
          </Col>
        ))}
      </Row>

      <Row>
        {images.slice(6, 12).map((image) => (
          <Col key={image} style={{ padding: "0px 15px 15px" }}>
            <Image src={image} />
          </Col>
        ))}
      </Row>

      <Row>
        {images.slice(12, 18).map((image) => (
          <Col key={image} style={{ padding: "0px 15px 15px" }}>
            <Image src={image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ExperienceFrame;
