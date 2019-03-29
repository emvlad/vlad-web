import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import News from "./component/News";
import Contact from "./component/Contact";
import LearnMore from "./component/LearnMore";
import Navbar from "./component/CustomNavbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/News" component={News} />
          <Route path="/Contact" component={Contact} />
          <Route path="/LearnMore" component={LearnMore} />
        </div>
      </Router>
    );
  }
}

export default App;
