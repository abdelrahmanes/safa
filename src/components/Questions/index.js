import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Question } from "react-bootstrap-icons";
import student from "../../images/student.png";
function Questions() {
  return (
    <div className="mt-1 question-container mb-5">
      <Row>
        <Col className="question-section-col">
          <div className="question-section bg-primary position-relative border-1">
            <img
              src={student}
              alt="student"
              className="w-100 position-absolute bottom-0 student"
            />
          </div>
        </Col>
        <Col className="bg-white question-body">
          <div className="d-flex align-items-center">
            <div className="question-icon mb-2">
              <Question />
            </div>
            <div>
              <p className="mb-0 send-question">ارسل سؤالك للمحاضر</p>
              <p className="mb-0 attend-webinar">
                يجب عليك التسجيل و حضور الندوة
              </p>
            </div>
          </div>
          <div className="position-relative textarea-containter">
            <textarea
              placeholder="اترك سؤالك هنا"
              rows="4"
              cols="30"
              className="w-100 p-1 text-area "
            />
            <p className="textarea-label mb-0 bg-white text-secondary position-absolute">
              السؤال
            </p>
          </div>
          <p className="error">
            لابد من حجز الندوة اولا حتي تتمكن من ترك سؤالك
          </p>
          <Button variant="primary" className="send-btn px-4">
            ارسل
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Questions;
