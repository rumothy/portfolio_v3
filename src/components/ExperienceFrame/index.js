import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//src={`${process.env.PUBLIC_URL}/logo192.png`}

//src="https://placehold.it/200x200?text=SecondText"
function ExperienceFrame(props) {
  const experiences = props.experiences;
  return (
    <Container
      fluid
      style={{
        minHeight: "50vh",
        background: "#F5F5F5",
      }}
    >
      <h2>Experience</h2>
      {experiences.map((experience) => (
        <Card key={experience.Id} border="dark" style={{ width: "100%" }}>
          <Card.Header>{experience.Company}</Card.Header>
          <Card.Body>
            <Card.Title>{experience.Position}</Card.Title>
            <Card.Text>{experience.Description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
      <br />
      {/* <Card border="dark" style={{ width: "100%" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="dark" style={{ width: "100%" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br /> */}
    </Container>
  );
}

export default ExperienceFrame;
