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

function App() {
  return (
    <div>
      <MyNav />
      <Jumbotron fluid className="App-header">
        <h1>HI, I'M ROSS</h1>
        <p>Software Engineer and UX Artist</p>
      </Jumbotron>
      <AboutFrame />
      <ExperienceFrame />
      <ServicesFrame />
      <PortfolioFrame />
      <ContactFrame />
      <FooterFrame />
    </div>
  );
}

export default App;
