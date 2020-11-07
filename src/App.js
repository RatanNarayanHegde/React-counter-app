import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container" role="main">
          <Counters />
        </main>
      </>
    );
  }
}

export default App;
