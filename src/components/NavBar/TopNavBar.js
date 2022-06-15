import React from "react";
import { Form, Nav, Navbar } from "react-bootstrap";
import { Calendar2, Search } from "react-bootstrap-icons";
import logo from "../../images/logo-white.png";
import user from "../../images/user.png";
function TopNavBar() {
  return (
    <>
      <Navbar bg="transparent" variant="transparent" className="top-nav-lg">
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Nav className="me-auto align-items-center">
          <Nav.Link className="text-white text-sm mt-1 ml-1" href="#home">
            En
          </Nav.Link>
          <Nav.Link className="text-white " href="#features">
            <Form>
              <Form.Group
                className=" d-flex justify-content-center align-items-center border-0 border-bottom border-white"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <Search className="icon-size" />
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="بحث..."
                  className="bg-transparent border-0"
                />
              </Form.Group>
            </Form>
          </Nav.Link>
          <div
            className="mx-1 mt-1 text-secondary cursor-pointer text-sm d-flex justify-content-start align-items-center"
            href="#pricing"
          >
            <Calendar2 className="icon-size mt-0 " />
            <span className="p-1">الأجندة</span>
          </div>
          <div className="mt-1">
            <img src={user} className="w-75 h-75" />
          </div>
        </Nav>
      </Navbar>

      <div className=" justify-content-center align-items-center top-nav-sm">
        <div>
          <img src={logo} />
        </div>
      </div>
    </>
  );
}

export default TopNavBar;
