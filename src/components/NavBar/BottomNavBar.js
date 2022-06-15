import React from "react";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Calendar2, Search } from "react-bootstrap-icons";
import user from "../../images/user.png";

function BottomNavBar() {
  return (
    <div className="bottom-nav justify-content-between align-items-center">
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
      <div className="d-flex justify-content-start gap-1 align-items-center">
        {/* <div className="text-white text-sm" href="#home">
          En
        </div>
        <div className="text-white " href="#features">
          <Form>
            <Form.Group
              className=" d-flex justify-content-center align-items-center border-0  border-white"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                <Search className="icon-size mb-0 mt-0" />
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="بحث..."
                className="bg-transparent border-0"
              />
            </Form.Group>
          </Form>
        </div>
        <div
          className="mx-1 mt-1 text-secondary cursor-pointer text-sm d-flex justify-content-start align-items-center"
          href="#pricing"
        >
          <Calendar2 className="icon-size mt-0 " />
        </div> */}
        <div className="mt-1 user-container">
          <img src={user} className="w-75 h-75" />
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
