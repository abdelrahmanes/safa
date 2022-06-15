import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CheckCircleFill,
  Facebook,
  Google,
  Linkedin,
  Twitter,
} from "react-bootstrap-icons";

function Summary() {
  return (
    <div className=" sm-container summary-section mb-5">
      <Row className="mt-5">
        <Col sm={7}>
          <h4 className=" summary-title">ملخص الندوة</h4>
          <p className="text-secondary attendants"> 10,382 حاضرين </p>
          <p className="summary-details">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصيهناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
            المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو
            شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
            لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
            استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
          </p>
          <p className="summary-details">
            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
            القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في
            الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
            توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى
            نصي، هنا يوجد محتوى نصي
          </p>
        </Col>
        <Col sm={5}>
          <div className="bg-primary text-white webinars">
            <div className="bg-secondary rounded d-flex justify-content-between align-items-center p-1">
              <p className="mb-0">نشر المحتوى</p>
              <div className="d-flex gap-1">
                <Google className="icon-size mt-0" />
                <Linkedin className="icon-size mt-0" />
                <Twitter className="icon-size mt-0" />
                <Facebook className="icon-size mt-0" />
              </div>
            </div>
            <div className="pb-2">
              <div className="d-flex px-2 gap-1">
                <div className="check-container d-flex  align-items-center">
                  <CheckCircleFill className="check-icon bg-white rounded-circle" />
                </div>
                <div>
                  <p className="mb-0 content-title">ندوات</p>
                  <p className="mb-0 content-desc">يوجد ندواتين كل اسبوع </p>
                </div>
              </div>
              <div className="d-flex px-2 gap-1">
                <div className="check-container d-flex  align-items-center">
                  <CheckCircleFill className="check-icon bg-white rounded-circle" />
                </div>
                <div>
                  <p className="mb-0 content-title">ندوات</p>
                  <p className="mb-0 content-desc">
                    جميع النداوت مجانية من صفا{" "}
                  </p>
                </div>
              </div>
              <div className="d-flex px-2 gap-1">
                <div className="check-container d-flex  align-items-center">
                  <CheckCircleFill className="check-icon bg-white rounded-circle" />
                </div>
                <div>
                  <p className="mb-0 content-title">ندوات</p>
                  <p className="mb-0 content-desc">
                    خطوات و نصائح في مجال الاقتصاد{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Summary;
