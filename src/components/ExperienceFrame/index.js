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
function decorateIconPaths(icons) {
  return icons.map((icon) => `${process.env.PUBLIC_URL}/images/${icon}`);
}

function ExperienceFrame(props) {
  const icons = decorateIconPaths(props.icons);

  let places = getImages(4, "workplace");
  let workplaces = props.experiences;
  places[1 - 1] = `${process.env.PUBLIC_URL}/images/${workplaces[0].Image}`;
  places[2 - 1] = `${process.env.PUBLIC_URL}/images/${workplaces[1].Image}`;
  places[3 - 1] = `${process.env.PUBLIC_URL}/images/${workplaces[2].Image}`;
  places[4 - 1] = `${process.env.PUBLIC_URL}/images/${workplaces[3].Image}`;
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
                  <Image width={64} height={64} src={image} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
        <Col>
          <Container>
            <h5>Some places where I've worked:</h5>

            {places.map((place) => (
              <Row
                md="auto"
                key={place}
                style={{
                  padding: "0px",
                  width: "256px",
                  height: "128",
                }}
              >
                <div style={{ width: "256px", height: "90px", margin: "1px" }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={place}
                  />
                </div>
                <p>{place.Company}</p>
              </Row>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ExperienceFrame;
