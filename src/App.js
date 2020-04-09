import React from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import Jumbotron from "react-bootstrap/Jumbotron";
import AboutFrame from "./components/AboutFrame";
function App() {
  return (
    <div>
      <MyNav />
      <Jumbotron fluid className="App-header">
        <h1>HI, I'M ROSS</h1>
        <p>Software Engineer and UX Artist</p>
      </Jumbotron>
      <AboutFrame />
    </div>
  );
}

export default App;
