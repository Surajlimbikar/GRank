import React, { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BrandingConsulting = () => {
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
        <div className="branding-consulting-banner">
          <img
            className="img-fluid w-100"
            src="assest/photos/branding/brand-consulting-banner.png"
            alt="G-Rank"
          />
          <div className="branding-cunsulting-banner-new-div">
            <h1 data-text="Brand Consulting">
              {/* <span class="words3"></span> */}
              Brand
              <br />
              Consulting
            </h1>
            <h2>Elevate Your Brand with us!</h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started</a>
            </motion.h3>
          </div>
          {/* <motion.h5
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p>What is</p>
            Branding Consulting
          </motion.h5>
          <h4>
            Brand consulting involves assisting clients in aligning their entire
            organizations to effectively
            <br /> deliver and promote their offerings compellingly and
            appealingly while establishing a distinctive
            <br /> edge over competitors.
          </h4> */}
        </div>
        <div className="branding-process-div">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 branding-consulting-process-text">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Our
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  Process
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  At G- Rank, we follow a comprehensive process to create
                  impactful website content. Our approach combines strategic
                  thinking, industry insights, and creative expertise to deliver
                  exceptional results. Our team believe in conducting in-depth
                  research and analysis of your brand, target audience, and
                  competition. This helps them to understand your unique value
                  proposition and identify key opportunities for online
                  visibility and engagement.
                </motion.p>
              </div>
              <div className="col-12 col-md-6 col-lg-6 ">
                {/* <div className="branding-consulting-process-img">
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="img-fluid branding-consulting-process-img"
                    src="assest/photos/branding/branding-consulting-process-img.png"
                    alt="G-Rank"
                  />
                </div> */}
                <div id="level">
                  <div id="content">
                    <div id="gears">
                      <div id="gears-static"></div>
                      <div id="gear-system-1">
                        <div class="shadow" id="shadow15"></div>
                        <div id="gear15"></div>
                        <div class="shadow" id="shadow14"></div>
                        <div id="gear14"></div>
                        <div class="shadow" id="shadow13"></div>
                        <div id="gear13"></div>
                      </div>
                      <div id="gear-system-2">
                        <div class="shadow" id="shadow10"></div>
                        <div id="gear10"></div>
                        <div class="shadow" id="shadow3"></div>
                        <div id="gear3"></div>
                      </div>
                      <div id="gear-system-3">
                        <div class="shadow" id="shadow9"></div>
                        <div id="gear9"></div>
                        <div class="shadow" id="shadow7"></div>
                        <div id="gear7"></div>
                      </div>
                      <div id="gear-system-4">
                        <div class="shadow" id="shadow6"></div>
                        <div id="gear6"></div>
                        <div id="gear4"></div>
                      </div>
                      <div id="gear-system-5">
                        <div class="shadow" id="shadow12"></div>
                        <div id="gear12"></div>
                        <div class="shadow" id="shadow11"></div>
                        <div id="gear11"></div>
                        <div class="shadow" id="shadow8"></div>
                        <div id="gear8"></div>
                      </div>
                      <div class="shadow" id="shadow1"></div>
                      <div id="gear1"></div>
                      <div id="gear-system-6">
                        <div class="shadow" id="shadow5"></div>
                        <div id="gear5"></div>
                        <div id="gear2"></div>
                      </div>
                      <div class="shadow" id="shadowweight"></div>
                      <div id="chain-circle"></div>
                      <div id="chain"></div>
                      <div id="weight"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* action black start*/}
        <div className="action-black-div-text">
          <motion.p
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Want to Elevate Your Brand?
            <br /> Get in Touch.
          </motion.p>
          <a href="#">
            <motion.p
              className="action-black-div-buttom"
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div>
        {/* action black end*/}
        {/* what we do start */}
        <div className="container-fluid branding-consulting-what">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-consulting-what-text">
                <p>
                  G-Rank specializes in brand consulting services in Hyderabad
                  and Bangalore
                </p>
                <p>
                  They are one of the leading brand consulting firms in these
                  cities
                </p>
                <p>
                  The focus of their services is to help businesses unlock their
                  true potential and establish a strong brand presence in the
                  market
                </p>
                <p>
                  They understand the importance of a well-defined brand
                  strategy
                </p>
                <p>
                  Their experienced consultants work closely with clients to
                  develop comprehensive brand strategies aligned with their
                  unique business objectives
                </p>
                <p>
                  The approach is highly collaborative, believing that close
                  partnerships with clients yield the best results
                </p>
                <p>
                  They listen, analyze, and strategize to ensure customized
                  solutions that meet specific requirements
                </p>
                <p>
                  Services offered encompass brand positioning messaging,
                  identity design, and management
                </p>
                <p>
                  They help create a compelling brand story that sets clients
                  apart from the competition and captures the essence of their
                  business
                </p>
                <p>
                  The aim is to revitalize clients' brands through innovative
                  solutions that drive brand growth and enhance market presence
                </p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 ">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow.png"
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
        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default BrandingConsulting;
