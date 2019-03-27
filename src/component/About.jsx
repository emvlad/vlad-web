import React, { Component } from "react";
import Jumb from "./Jumb";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../sheets/Components.css";

class About extends Component {
  render() {
    return (
      <Container>
        <Jumb />
        <p> ABOUT PAGE</p>
      </Container>
    );
  }
}

export default About;
