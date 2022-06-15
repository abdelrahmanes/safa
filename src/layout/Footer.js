import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Facebook, Google, Linkedin, Twitter } from "react-bootstrap-icons";
import logo_dark from "../images/logo-dark.png";
function Footer() {
  return (
    <footer className="border-top ">
      <Row>
        <Col sm={12} lg={4}>
          <div className="mb-3">
            <img src={logo_dark} alt="logo" />
          </div>
          <div className="d-flex flex-column mt-2 gap-1">
            <a href="mailto:safa@gmail.com" className="f-link">
              safa@gmail.com
            </a>
            <a href="tel:+757 699-4478" className="tel f-link">
              +757 699-4478
            </a>
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <p className="links">الروابط</p>
          <Row>
            <Col sm={6}>
              <p className="link"> الرئيسية</p>
              <p className="link">من نحن</p>
              <p className="link">الخدمات</p>
              <p className="link">الفعاليات</p>
              <p className="link">الكورسات</p>
              <p className="link">الندوات</p>
            </Col>
            <Col sm={6}>
              <p className="link">الورشات</p>
              <p className="link">الأخبار</p>
              <p className="link">الأبحاث</p>
              <p className="link">فريق العمل</p>
              <p className="link"> العضوية</p>
              <p className="link">اتصل بنا</p>
            </Col>
          </Row>
        </Col>
        <Col sm={12} lg={4} className="flex-column gap-3 d-flex">
          <p className="links">تابعنا</p>
          <div className="d-flex flex-column gap-1">
            <div className="d-flex gap-1 f-icons">
              <Google className="icon-size mt-0" />
              <Linkedin className="icon-size mt-0" />
              <Twitter className="icon-size mt-0" />
              <Facebook className="icon-size mt-0" />
            </div>
            <p className="links">لمتابعه الاخبار</p>
            <InputGroup className="mb-3 subscribe">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                className="rounded-1"
              />
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="px-3 bg-primary text-white rounded-1"
              >
                اشترك
              </InputGroup.Text>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <div className="text-center py-5 link">الحقوق محفوظة لصفا</div>
    </footer>
  );
}

export default Footer;
