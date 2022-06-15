import React from "react";
import { Breadcrumb, Button, Col } from "react-bootstrap";
import { Calendar4Event, Heart } from "react-bootstrap-icons";
import dr1 from "../../images/dr1.png";
import dr2 from "../../images/dr2.png";
function HeroDetails() {
  return (
    <Col className="row-col-6 position-relative" sm={12} md={4} lg={5}>
      <div className="details-top d-flex justify-content-between">
        <Breadcrumb>
          <Breadcrumb.Item href="#">الرئيسية</Breadcrumb.Item>
          <Breadcrumb.Item href="#" active>
            الندوات
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="d-flex gap-1">
          <div className="heart">
            <Heart className="text-primary" />
          </div>
          <p className="text-white heart-text">أضف إلى المفضلة</p>
        </div>
      </div>
      <div className="mt-1 d-flex align-align-items-center">
        <Calendar4Event className="text-secondary lg-icon" />
        <p className="text-white event">
          يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً
        </p>
      </div>
      <h1 className="hero-title text-white">
        ندعوكم في الجمعية المالية &nbsp; السعودية صفا لحضور المساحة الخاصة
        &nbsp;بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
      </h1>
      <Button variant="secondary" className="text-white px-3 py-9p my-1">
        حجز الآن
      </Button>

      <div className="bg-white  rounded-3 py-1 px-1 position-absolute speakers-card">
        <p>تقديم المحاضرين</p>
        <div>
          <div className="d-flex gap-1 mb-1">
            <div className="dr-img">
              <img
                src={dr1}
                alt="dr raja"
                className="w-100 h-100 rounded-circle"
              />
            </div>
            <div style={{ width: "calc(100% - 52px)" }}>
              <h3 className="dr-name">الدكتور رجا المرزوقى</h3>
              <p className="dr-title ">
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
          </div>
          <div className="d-flex gap-1">
            <div className="dr-img">
              <img
                src={dr2}
                alt="dr raja"
                className="w-100 h-100 rounded-circle"
              />
            </div>
            <div style={{ width: "calc(100% - 52px)" }}>
              <h3 className="dr-name">الدكتور رجا المرزوقى</h3>
              <p className="dr-title ">
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default HeroDetails;
