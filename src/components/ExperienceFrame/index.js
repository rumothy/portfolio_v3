import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
//src={`${process.env.PUBLIC_URL}/logo192.png`}

//src="https://placehold.it/200x200?text=SecondText"

function getImages(count, text) {
  let images = [];
  for (let i = 0; i < count; i++) {
    images.push(`https://placehold.it/127x127?text=${text} ${i + 1}`);
  }
  return images;
}

//index: 0 1 2 3, len: 4
//icons: 1 2 3 4

function ExperienceFrame(props) {
  const icons = getImages(4, "icon");
  const places = getImages(6, "workplace");
  icons[2 - 1] = `${process.env.PUBLIC_URL}/images/bootstrap.png`;
  return (
    <Container
      fluid
      style={{
        minHeight: "50vh",
        background: "#F5F5F5",
        color: "#0f4c81",
      }}
    >
      <Row style={{ textAlign: "center" }}>
        <Col />
        <Col>
          <h2>Experience</h2>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col>
          <Container>
            <h5>Some technologies I've worked with:</h5>
            <Row>
              {icons.map((image) => (
                <Col md="auto" key={image} style={{ padding: "0px 15px 15px" }}>
                  <Image width={128} height={128} src={image} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
        <Col>
          <Container>
            <h5>Some places where I've worked:</h5>
            <Row>
              {places.map((place) => (
                <Col
                  md="auto"
                  key={place}
                  style={{
                    padding: "0px 15px 15px",
                    width: "256px",
                    height: "256px",
                    border: "dashed",
                  }}
                >
                  <a href="#">
                    <Image src={place} />
                  </a>
                  <p>Work place name</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceFrame;
