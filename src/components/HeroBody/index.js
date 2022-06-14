import React from "react";
import { Container, Row } from "react-bootstrap";
import HeroDetails from "./HeroDetails";
import HeroImg from "./HeroImg";

function HeroBody() {
  return (
    <div className="mt-3 mx-1" fluid="md">
      <Row>
        <HeroDetails />
        <HeroImg />
      </Row>
    </div>
  );
}

export default HeroBody;
