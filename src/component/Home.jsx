import React, { Component } from "react";
import Jumb from "./Jumb";
import { Container, Row, Col, Image } from "react-bootstrap";
import jlom from "../photos/15-jennifer-lopez.png";
import jloGlad from "../photos/jloGlad.png";
import angel from "../photos/angelina-jolie-12.png";
import nicky from "../photos/NickiMinaj54.png";
import beonc from "../photos/Yonc57.png";
import jlome from "../photos/15-jlo11.png";
import "../sheets/Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumb />
        <Row className="show-grid text-center">
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={jlom} className="shortpant" />
            <h4>Jlom mini Jean</h4>
            <p className="text-wrapper">
              That's why I paint - because I can create the kind of world I want
              - and I can make this world as happy as I want it. That's crazy.
              With something so strong, a little bit can go a long way. We don't
              need any guidelines or formats. All we need to do is just let it
              flow right out of us. Now we can begin working on lots of happy
              little things. I'm gonna add just a tiny little amount of Prussian
              Blue.
            </p>
          </Col>
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={jloGlad} className="shortpants" />
            <h4>Awesome Girl</h4>
            <p className="text-wrapper">
              This is truly an almighty mountain. It's almost like something out
              of a fairytale book. The little tiny Tim easels will let you down.
              Don't forget to tell these special people in your life just how
              special they are to you. A happy cloud. This is a fantastic little
              painting. Zip. That easy.
            </p>
          </Col>
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={angel} className="shortpants" />
            <h4>Angel Way 2</h4>
            <p className="text-wrapper">
              We artists are a different breed of people. We're a happy bunch.
              You are only limited by your imagination. Don't fight it, use what
              happens. You have to make these big decisions. Here's something
              that's fun. I will take some magic white, and a little bit of
              Vandyke brown and a little touch of yellow.
            </p>
          </Col>
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={nicky} className="shortpants" />
            <h4>Nicky Mania</h4>
            <p className="text-wrapper">
              So often we avoid running water, and running water is a lot of
              fun. The secret to doing anything is believing that you can do it.
              Anything that you believe you can do strong enough, you can do.
              Anything. As long as you believe. Only God can make a tree - but
              you can paint one. A thin paint will stick to a thick paint. No
              pressure. Just relax and watch it happen. Maybe there's a happy
              little waterfall happening over here. Poor old tree. You can do
              anything your heart can imagine. Maybe there's a little something
              happening right here. Volunteering your time; it pays you and your
              whole community fantastic dividends.
            </p>
          </Col>
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={beonc} className="shortpants" />
            <h4>Be sure and See</h4>
            <p className="text-wrapper">
              Think about a cloud. Just float around and be there. This is your
              creation - and it's just as unique and special as you are. Little
              trees and bushes grow however makes them happy. We artists are a
              different breed of people. We're a happy bunch. And I know you're
              saying, 'Oh Bob, you've done it this time.' And you may be right.
              You can't have light without dark. You can't know happiness unless
              you've known sorrow. Let all these things just sort of happen.
              When you buy that first tube of paint it gives you an artist
              license.
            </p>
          </Col>
          <Col xs={10} sm="2" className="person-wrapper">
            <Image src={jlome} className="shortpants" />
            <h4>Take me !</h4>
            <p className="text-wrapper">
              I think there's an artist hidden in the bottom of every single one
              of us. Those great big fluffy clouds. Use absolutely no pressure.
              Just like an angel's wing. Pretend you're water. Just floating
              without any effort. Having a good day. There it is. Talk to trees,
              look at the birds. Whatever it takes. Water's like me. It's
              laaazy ... Boy, it always looks for the easiest way to do things
              This is truly an almighty mountain. You've got to learn to fight
              the temptation to resist these things. Just let them happen.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
