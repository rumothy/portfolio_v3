import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <MyNav />
      <Jumbotron fluid className="App-header">
        <h1>HI, I'M ROSS</h1>
        <p>Software Engineer and UX Artist</p>
      </Jumbotron>
    </div>
  );
}

export default App;
