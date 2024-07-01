import instructor_info_data from "@/src/data/instructor-data";
import Link from "next/link";
import React from "react";

const InstructorArea = () => {
  return (
    <>
      <section className="instructor-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title mb-65 text-center">
                <span className="tp-sub-title-box mb-15">Instructor</span>
                <h2 className="tp-section-title">Our Expert Instructor</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {instructor_info_data.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <div
                  className="tp-instruc-item wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".2s"
                >
                  <div className="tp-instructor text-center p-relative mb-40">
                    <div className="tp-instructor__thumb mb-25">
                      <img src={item.img} alt="instructor-profile" />
                    </div>
                    <div className="tp-instructor__content">
                      <span>{item.title}</span>
                      <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-35 mt-5">
                        <Link href="/instructor-profile">{item.name}</Link>
                      </h4>
                      <div className="tp-instructor__stu-info">
                        <ul className="d-flex align-items-center justify-content-center">
                          <li className="d-flex align-items-center">
                            <img
                              src="/assets/img/icon/c-meta-01.png"
                              alt="meta-icon"
                            />
                            <i>{item.total_class} Classes</i>
                          </li>
                          <li className="d-flex align-items-center">
                            <img
                              src="/assets/img/icon/c-meta-02.png"
                              alt="meta-icon"
                            />
                            <i>{item.total_st}+ Students</i>
                          </li>
                        </ul>
                      </div>
                      <div className="tp-instructor__social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa-brands fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="instructor-btn text-center mt-20">
                <Link className="tp-btn" href="/instructor">
                  All Instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorArea;
