import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Image } from "react-bootstrap";
import "../sheets/Home.css";

const jumb = () => {
  return (
    <Jumbotron>
      <Image src="..\photos\VC0115.jpg" className="head" />
      <h2>Welcome to Chris-web</h2>
      <p> This is Chris web page with react</p>
      <Link to="/LearnMore">
        <Button bs="primary" size="mg">
          Learn More
        </Button>
      </Link>
    </Jumbotron>
  );
};

export default jumb;
