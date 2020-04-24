import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ExperienceFrame = () => {
  const expItems = [
    {
      Id: 1,
      Company: "Rumothy LLC",
      Position: "Software Developer & Mentor",
      City: "Orlando",
      From: "August 2019",
      To: "Present",
      Description: "",
    },
    {
      Id: 2,
      Company: "Benchmark Electronics",
      Position: "Software Engineer",
      City: "Orlando",
      From: "November 2014",
      To: "July 2019",
      Description: "",
    },
  ];
  return (
    <Container
      fluid
      style={{
        minHeight: "65vh",
        background: "#F5F5F5",
      }}
    >
      <h2>Experience</h2>
      {expItems.map((expItem) => (
        <Row key={expItem.Id}>
          <Col>{expItem.Company}</Col>
          <Col>{expItem.Position}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default ExperienceFrame;
