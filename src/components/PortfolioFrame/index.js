import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PortfolioFrame = () => {
  const ffmSiteImg = `${process.env.PUBLIC_URL}/images/ffm.png`;
  const rumothySiteImg = `${process.env.PUBLIC_URL}/images/rumothysite.png`;
  const portfolioSiteImg = `${process.env.PUBLIC_URL}/images/portfolio.png`;
  const gitsearchImg = `${process.env.PUBLIC_URL}/images/gitsearch.png`;
  return (
    <Container
      id="portfolio"
      fluid
      style={{
        minHeight: "65vh",
        background: "#F5F5F5",
        color: "#0f4c81",
      }}
    >
      <Row style={{ textAlign: "center" }}>
        <Col />
        <Col>
          <h2 style={{ textAlign: "center", margin: "50px" }}>
            WHAT I'VE DONE
          </h2>
        </Col>
        <Col />
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ffmSiteImg} />
            <Card.Body>
              <Card.Title>Fair Focus Media</Card.Title>
              <Card.Text>Built with HTML/CSS, JavaScript, and PHP.</Card.Text>
              <Button variant="primary">
                <a style={{ color: "white" }} href="http://fairfocusmedia.org">
                  See it
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={rumothySiteImg} />
            <Card.Body>
              <Card.Title>Rumothy.com</Card.Title>
              <Card.Text>Built with WordPress.</Card.Text>
              <Button variant="primary">
                <a style={{ color: "white" }} href="https://rumothy.com/">
                  See it
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={portfolioSiteImg} />
            <Card.Body>
              <Card.Title>This site</Card.Title>
              <Card.Text>Built with React.</Card.Text>
              <Button variant="primary">
                <a style={{ color: "white" }} href="#">
                  See it
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={gitsearchImg} />
            <Card.Body>
              <Card.Title>GitSearch</Card.Title>
              <Card.Text>Built with GraphQL and React.</Card.Text>
              <Button variant="primary">
                <a
                  style={{ color: "white" }}
                  href="https://rumothy.github.io/gitsearch/"
                >
                  See it
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioFrame;
