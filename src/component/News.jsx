import React, { Component } from "react";
import Jumb from "./Jumb";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../sheets/Components.css";

class News extends Component {
  render() {
    return (
      <Container>
        <Jumb />
        <p> NEWS PAGE</p>
      </Container>
    );
  }
}

export default News;
