import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";

const SocialMediaMarketing = () => {
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    // arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section-top">
        <Header />
        <div className="performance-banner">
          <img
            className="img-fluid w-100"
            src="assest/photos/performance-marketing/performance-smm-banner.png"
            alt="G-Rank"
          />
          <div className="performance-smm-banner-div">
            <h1>
              Search Media
              <br />
              Marketing
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/smm-ads1.png"
                  alt="G-Rank"
                />
                <h4>Social media audit</h4>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid"
                  src="assest/photos/performance-marketing/smm-ads2.png"
                  alt="G-Rank"
                />
                <h4>Social media management</h4>
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-4 performance-smm-subdiv">
              <div>
                <img
                  className="img-fluid "
                  src="assest/photos/performance-marketing/smm-ads3.png"
                  alt="G-Rank"
                />
                <h4>Social media ads</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 performance-div2">
              <h1>Key to your Social Media Success​</h1>
              <p>
                Social media marketing has revolutionized how businesses shape
                consumer behavior, encompassing various strategies such as
                engaging content promotion and personalized messaging based on
                extracted personal data. The strength of social media marketing
                lies in its exceptional capabilities across three key marketing
                domains: connectivity, interaction, and customer insights.
              </p>
              <p>
                ​ At G-Rank, we get together advance tools and technologies to
                guarantee the effectiveness and efficiency of your social media
                campaigns. Through advanced analytics and automated scheduling,
                we harness the potential of technology to optimize business
                outcomes.​
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <img
                className="img-fluid "
                src="assest/photos/performance-marketing/smm-key-img.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid ads-batch">
          <div className="row">
            <div className="col-12 ads-batch-div1">
              <h1>Our SEM Services</h1>
            </div>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media audit</h1>
                      <p>
                        Our team analyze your brand's social media performance,
                        compare it to competitors, provide audience insights,
                        and develop a creative strategy aligned with your
                        business goals.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media management</h1>
                      <p>
                        Our team handle your brand's social media channels by
                        creating tailored monthly content calendars, driving
                        engagement through customized creatives, and evaluating
                        effectiveness through performance reports.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="smm-ads-batch-div2">
                      <h1>Social media ads</h1>
                      <p>
                        Our team works on your social media account to drive
                        conversions. We develop compelling messages and deploy
                        impactful creatives to reduce traffic costs and boost
                        click-through rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* what we do start */}
        <div className="container-fluid branding-sem-consulting-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-sem-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-sem-consulting-what-text">
                <p>
                  Tailored online marketing solutions aligned with business
                  objectives
                </p>
                <p>
                  Tailored online marketing solutions aligned with business
                  objectives
                </p>
                <p>
                  Team of skilled professionals with deep industry knowledge of
                  social media trends and strategies
                </p>
                <p>
                  Customized solutions for uniqueness of each business, ensuring
                  high effectiveness
                </p>
                <p>
                  Prominent social media marketing agency in Bangalore and
                  Hyderabad
                </p>
                <p>
                  Comprehensive services: strategic planning, content creation,
                  social media advertising, and analytics
                </p>
                <p>
                  Collaborative approach to understand goals and target
                  audience, creating data-driven strategies
                </p>
                <p>
                  Commitment to staying ahead in social media marketing by
                  monitoring trends, updates, and user behavior
                </p>
                <p>Ongoing campaign optimization for maximum ROI</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 ">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-blue.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        {/* what we do end */}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="branding-quick-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links
                <p className="d-block"> For You</p>
              </motion.h2>
              <Slider {...settings3}>
                <div className="slider-div2">
                  <h1 className="slider-img2">Branding</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Creative & <p className="d-block"> Content</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Organic <p className="d-block"> marketing</p>
                  </h1>
                </div>

                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Performance <p className="d-block"> marketing</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Social Media</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Development</p>
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Domain</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">
                    Web <p className="d-block"> Hosting</p>{" "}
                  </h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Security</h1>
                </div>
                <div className="slider-div2">
                  <h1 className="slider-img2">Email</h1>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}

        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/branding/branding-footer-img.png"
              alt="G-Rank"
            />
            <div className="performance-footer-div-text">
              <h1>Learn more about our sevices</h1>
              <div className="searchArea">
                <button type="submit" tabindex="2">
                  Explore
                </button>
                <div className="inputDiv">
                  <input type="text" id="inputField" tabindex="1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        /> */}
      </section>
    </>
  );
};

export default SocialMediaMarketing;
