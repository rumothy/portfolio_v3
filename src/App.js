import React from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import Jumbotron from "react-bootstrap/Jumbotron";
import AboutFrame from "./components/AboutFrame";
import ExperienceFrame from "./components/ExperienceFrame";
import ServicesFrame from "./components/ServicesFrame";
import PortfolioFrame from "./components/PortfolioFrame";
import ContactFrame from "./components/ContactFrame";
import FooterFrame from "./components/FooterFrame";
import experiences from "./experiences.json";
import icons from "./icons.json";

function App() {
  return (
    <div>
      <MyNav />
      <Jumbotron fluid className="App-header" style={{ marginBottom: "0px" }}>
        <h1>HI, I'M ROSS</h1>
        <p>Software Engineer</p>
      </Jumbotron>
      <ExperienceFrame experiences={experiences} icons={icons} />
      <ServicesFrame />
      <PortfolioFrame />
      <ContactFrame />
      <AboutFrame />
      <FooterFrame />
    </div>
  );
}

export default App;
