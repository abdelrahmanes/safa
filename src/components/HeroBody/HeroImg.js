import React from "react";
import { Col } from "react-bootstrap";
import heroImg from "../../images/wbinar.png";

function HeroImg() {
  return (
    <Col className="row-cols-6 " sm={12} md={8} lg={7}>
      <img src={heroImg} alt="webinar image" className="w-100 hero-img" />
    </Col>
  );
}

export default HeroImg;
