import review_content from '@/src/data/review-data';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import  {useState} from 'react';


const CourseDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
         <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-12">
                  <div className="c-details-wrapper mr-25">
                     <div className="c-details-thumb p-relative mb-40">
                        <img src="/assets/img/course/c-details-bg-01.jpg" alt="details-bg" />
                        <div className="c-details-ava d-md-flex align-items-center">
                           <img src="/assets/img/course/c-details-ava-01.png" alt="avata" />
                           <span>By <a href="#">Emilia Jonas</a></span>
                        </div>
                     </div>
                     <div className="course-details-content mb-45">
                        <div className="tpcourse__category mb-15">
                           <ul className="tpcourse__price-list d-flex align-items-center">
                              <li><a className="c-color-green" href="#">Design</a></li>
                              <li><a className="c-color-yellow" href="#">Development</a></li>
                           </ul>
                        </div>
                        <div className="tpcourse__ava-title mb-25">
                           <h4 className="c-details-title"><a href="#">Master Web Design in Adobe XD: Complete UI/UX Masterclass</a></h4>
                        </div>
                        <div className="tpcourse__meta course-details-list">
                           <ul className="d-flex align-items-center">
                              <li>
                                 <div className="rating-gold d-flex align-items-center">
                                    <p>4.7</p>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-ss-star"></i>
                                    <i className="fi fi-rs-star"></i>
                                    <span>(125)</span>
                                 </div>
                              </li>
                              <li><img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" /> <span>35 Classes</span></li>
                              <li><img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" /> <span>291 Students</span></li>
                           </ul>
                        </div>
                     </div>
                     <div className="c-details-about mb-40">
                        <h5 className="tp-c-details-title mb-20">About This Course</h5>
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies for covalent opportunities. Competently create efficient markets through best-of-breed potentialities.</p>
                        <p>Proactively initiate corporate vortals via bricks-and-clicks relationships. Dynamically envisioneer cutting-edge paradigms via client-centered relationships. Globally repurpose backward-compatible growth strategies and fully tested e-services. Energistically promote stand-alone models whereas effective solutions. Quickly target low-risk high-yield e-markets via web-enabled networks.</p>
                     </div>
                     <div className="cor-details-instructor mb-40">
                        <h4 className="tp-c-details-title mb-40">Instructor</h4>
                        <div className="course-instructor-details d-flex f-wrap align-items-center">
                           <div className="course-avata mr-30 mb-20">
                              <img src="/assets/img/course/c-details-ava-thumb-01.jpg" alt="avata-thumb" />
                           </div>
                           <div className="course-avatar-details mb-20">
                              <h5 className="c-avata-title mb-10">Hossain Mahmud</h5>
                              <p>Award Winning Chemical & User Interface Design Training</p>
                              <div className="c-details-list mb-5">
                                 <ul className="d-flex align-items-center">
                                    <li>
                                       <div className="rating-gold d-flex align-items-center">
                                          <p>4.7</p>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-ss-star"></i>
                                          <i className="fi fi-rs-star"></i>
                                          <span>(125)</span>
                                       </div>
                                    </li>
                                    <li><img src="/assets/img/icon/c-details-01.png" alt="meta-icon" /><span>35 Classes</span></li>
                                 </ul>
                              </div>
                              <div className="c-details-stu">
                                 <ul>
                                    <li className="d-flex align-items-center"><img src="/assets/img/icon/c-details-02.png" alt="meta-icon"/> <span>2,35,687 Students</span></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <p>Synergistically foster 24/7 leadership rather than scalable platforms. Conveniently visualize installed base products before interactive results. Collaboratively restore corporate experiences and open-source applications. Proactively mesh cooperative growth strategies.</p>
                     </div>
                     <div className="c-details-review pb-15">
                        <div className="c-review-title-wrapper">
                           <h5 className="c-review-title mb-40">Review</h5>
                        </div>
                        <div className="course-reviewer-item-wrapper">

                              {review_content.map((item, i) => 
                                 <div key={i} className="course-reviewer-item d-flex mb-25">
                                 <div className="course-review-ava">
                                    <img src={item.img} alt="details-avata" />
                                 </div>
                                 <div className="course-review-content p-relative">
                                    <h5 className="course-ava-title mb-15">{item.name}</h5>
                                    <div className="tpcourse__rating-icon d-flex align-items-center mb-10">
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-ss-star"></i>
                                       <i className="fi fi-rs-star"></i>
                                    </div>
                                    <p>{item.review_text}</p>
                                    <div className="c-reviewer-time">
                                       <span>{item.review_time}</span>
                                    </div>
                                 </div>
                              </div>
                                 
                                 )
                              }

                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-12">
                  <div className="c-details-sidebar">
                     <div className="c-video-thumb p-relative mb-25">
                        <img src="/assets/img/bg/c-details-video-bg.jpg" alt="video-bg" />
                        <div className="c-video-icon"  >
                           <a className="popup-video" onClick={() => setIsVideoOpen(true)}   ><i className="fi fi-sr-play"></i></a>
                        </div>
                     </div>
                     <div className="course-details-widget">
                        <div className="cd-video-price">
                           <h3 className="pricing-video text-center mb-15">$29.99</h3>
                           <div className="cd-pricing-btn text-center mb-30">
                              <Link className="tp-vp-btn" href="/course-details">Add To Cart</Link>
                              <Link className="tp-vp-btn-green" href="/course-details">Enroll Now</Link>
                           </div>
                        </div>
                        <div className="cd-information mb-35">
                           <ul>
                              <li><i className="fa-light fa-calendars"></i> <label>Lesson</label> <span>36</span></li>
                              <li><i className="fi fi-rr-chart-pie-alt"></i> <label>Quizess</label> <span>6</span></li>
                              <li><i className="fi fi-rr-user"></i> <label>Students</label> <span>105</span></li>
                              <li><i className="fa-light fa-clock-desk"></i> <label>Duration</label> <span>16 Hours</span></li>
                              <li><i className="fi fi-sr-stats"></i> <label>Skill Level</label> <span>Beginner</span></li>
                              <li><i className="fi fi-rr-comments"></i> <label>Language</label> <span>English</span></li>
                              <li><i className="fi fi-rs-diploma"></i> <label>Certificate</label> <span>Yes</span></li>
                           </ul>
                        </div>
                        <div className="c-details-social">
                           <h5 className="cd-social-title mb-25">Share Now:</h5>
                           <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-instagram"></i></a>
                           <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"W-bgMEvrd2E"}
      />

      {/* video modal end */}
        </>
    );
};

export default CourseDetailsArea;