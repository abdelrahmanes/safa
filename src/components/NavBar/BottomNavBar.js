import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function BottomNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="bg-white p-10p rounded-2 w-100 mt-1 mx-1">
          <Nav.Link href="#home" className="active">
            الرئيسية
          </Nav.Link>
          <Nav.Link href="#link">من نحن</Nav.Link>
          <Nav.Link href="#link">الخدمات</Nav.Link>
          <Nav.Link href="#link">الفعاليات</Nav.Link>
          <Nav.Link href="#link">الكورسات</Nav.Link>
          <Nav.Link href="#link">الندوات</Nav.Link>
          <Nav.Link href="#link">الورشات</Nav.Link>
          <Nav.Link href="#link">الأخبار</Nav.Link>
          <Nav.Link href="#link">الأبحاث</Nav.Link>
          <Nav.Link href="#link">فريق العمل</Nav.Link>
          <Nav.Link href="#link">العضوية</Nav.Link>
          <Nav.Link href="#link">اتصل بنا</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BottomNavBar;
