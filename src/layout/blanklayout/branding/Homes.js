import React, { useState } from "react";
import Slider from "react-slick";
import { Routes, Route, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import WhatWeDo from "../our-teams/WhatWeDo";
import OurMethodology from "../our-teams/OurMethodology";
import WhyChooseUs from "../our-teams/WhyChooseUs";
import OurStory from "../our-teams/OurStory";
import Header from "../header2/Header";
import RemoveIcon from "@mui/icons-material/Remove";
import Typewriter from "typewriter-effect";
const Homes = () => {
  // useState section start--------------------------------------
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  // acoordian button
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  //  useState section end----------------------------------------
  //  video autoplay section start------------------------------------
  // const videoEl = useRef(null);

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch((error) => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  // useEffect(() => {
  //   attemptPlay();
  // }, []);
  //  video autoplay section end------------------------------------
  // Slider section start-----------------------------------------
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-next"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <KeyboardArrowRightIcon className="forword-arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-prev"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon className="backword-arrow" />
      </div>
    );
  }
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    waitForAnimate: false,
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
  var settings2 = {
    // dots: true,
    infinite: true,
    // speed: 300,
    autoplay: true,

    // autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  const settings4 = {
    speed: 2000,
    autoplay: true,
    infinite: true,
    // cssEase: "linear",
    // autoplaySpeed: 3000,
    // dots: true,
    // waitForAnimate: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  const settings5 = {
    speed: 2000,
    autoplay: true,
    rtl: true,
    infinite: true,
    // cssEase: "linear",
    // autoplaySpeed: 3000,
    // dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };

  const settings6 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3.5,
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
  // slider section end -------------------------------------------------------

  return (
    <>
      <section className="section-top">
        <Header />
        {/* top banner start */}
        <section>
          <div className="banner-new">
            <img
              className="img-fluid w-100 "
              src="assest/photos/header-banner.png"
              alt="G-Rank"
            />
            <div className="banner-new-div">
              <h1>
                <span class="word"></span>
                {/* <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Your Growth Our Commitment")
                      // .pauseFor(1000)

                      .deleteAll()
                      .typeString("Your Growth Our Commitment")
                      .start();
                  }}
                /> */}
                {/* <div class="typewriter">
                  <h1>
                    Your Growth <br />
                    Our Commitment
                  </h1>
                </div> */}
              </h1>
              <h2>
                Innovative Ideas comes from
                <br />
                the right mind set
              </h2>

              <motion.h3
                href="#"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <a href="#">Get Started</a>
              </motion.h3>
            </div>
            <motion.h4
              className="slider-heading-top"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Clientele
            </motion.h4>
          </div>
        </section>
        {/* top banner end */}
        {/* our client start */}
        <section>
          <div className="container-fluid">
            <div>
              <Slider {...settings3}>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/eco-life.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/cms.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/jaya.png"
                    alt="G-Rank"
                  />
                </div>

                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />{" "}
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/performax.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/dirak.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/signature.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/shodhana.png"
                    alt="G-Rank"
                  />
                </div>
                <div className="slider-div">
                  <img
                    className="slider-img-absolute1"
                    src="assest/photos/top-slider-img.png"
                    alt="G-Rank"
                  />
                  <img
                    className="slider-img-absolute-9"
                    src="assest/photos/client-icon/ramky.png"
                    alt="G-Rank"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* our client end */}
        {/* selector section start */}
        <section className="section-margin-selecter">
          <div className="container">
            <div className="row">
              <div className="col-12 selecter-section">
                <motion.h1
                  initial={{ opacity: 0, scale: 0, x: -100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  I'm looking for :
                </motion.h1>
                <motion.select
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  onchange="print_state4('state4',this.selectedIndex);"
                  id="country4"
                  class="selecter-div"
                  name="country4"
                  required=""
                >
                  <option value="">Branding</option>
                  <option value="Branding">Branding</option>
                  <option value="Contant">Performance Marketing</option>
                  <option value="web Development">Organic Marketing</option>
                  <option value="social media">Creative & Content</option>
                  <option value="social media">Social Media</option>
                  <option value="social media">Web Development</option>
                  <option value="social media">Domain</option>
                  <option value="social media">Web Hosting</option>
                  <option value="social media">Security</option>
                  <option value="social media">Email</option>
                </motion.select>
              </div>
            </div>
          </div>
        </section>
        {/* selector section end */}
        {/* our team section start*/}
        <section className="section-margin-selecter2">
          <div className="">
            <ul className="nav nav-tabs2" id="myTab" role="tablist">
              <li className=" nav-item2" role="presentation">
                <button
                  className="nav-link2 active"
                  id="home-tab2"
                  data-toggle="tab"
                  data-target="#home2"
                  type="button"
                  role="tab"
                  aria-controls="home2"
                  aria-selected="true"
                >
                  Our Core Team
                </button>
              </li>
              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2 "
                  id="home-tab1"
                  data-toggle="tab"
                  data-target="#home1"
                  type="button"
                  role="tab"
                  aria-controls="home1"
                  aria-selected="true"
                >
                  Our story
                </button>
              </li>
              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2"
                  id="profile-tab2"
                  data-toggle="tab"
                  data-target="#profile2"
                  type="button"
                  role="tab"
                  aria-controls="profile2"
                  aria-selected="false"
                >
                  What We Do
                </button>
              </li>
              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2"
                  id="contact-tab3"
                  data-toggle="tab"
                  data-target="#contact3"
                  type="button"
                  role="tab"
                  aria-controls="contact3"
                  aria-selected="false"
                >
                  Our Methodology
                </button>
              </li>
              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2"
                  id="contact-tab4"
                  data-toggle="tab"
                  data-target="#contact4"
                  type="button"
                  role="tab"
                  aria-controls="contact4"
                  aria-selected="false"
                >
                  Why Choose Us
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home2"
              role="tabpanel"
              aria-labelledby="home-tab2"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <Slider {...settings6}>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                      <div className="slider-div-team">
                        <div></div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane "
              id="home1"
              role="tabpanel"
              aria-labelledby="home-tab1"
            >
              <img
                className="img-fluid w-100"
                src="assest/photos/our-story-timeline.png"
                alt="grank"
              />
            </div>
            <div
              className="tab-pane fade nav-section-content2"
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab2"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 ourteam-what-we-do-text">
                    <div class="typewriter">
                      <h1>
                        WHAT
                        <span>WE</span>
                        <span className="do">DO</span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 nav-tab-text">
                    {/* <h2 className="slider-heading1">WHO ARE WE</h2> */}
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text4">
                          Powering business since 2010!
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          G-Rank was established in 2010 and is not just a
                          <span className="d-block">
                            digital marketing agency.
                          </span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          The agency provides expert digital marketing
                          <span className="d-block">
                            solutions that drive success.
                          </span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          G-Rank has deep expertise across various
                          <span className="d-block">sectors.</span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          The dedicated team at G-Rank is committed to
                          <span className="d-block">
                            helping companies thrive.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade nav-section-content"
              id="contact3"
              role="tabpanel"
              aria-labelledby="contact-tab3"
            >
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-7 col-lg-7 align-self-center">
                    <motion.img
                      className="img-fluid  methodo-img"
                      src="assest/photos/methodology/methodo-banner.png"
                      alt="grank"
                      initial={{ opacity: 0, scale: 0, x: 200 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <div className="col-12 col-md-5 col-lg-5">
                    <motion.div
                      className="methodo-texting"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <h1>Expanding Vision:</h1>
                      <p>
                        - Encourages clients to envision their business on a
                        grand scale.
                      </p>
                      <p>- Moves beyond limited perspectives.</p>

                      <h1>Clear and Concise Communication:</h1>
                      <p>- Conveys our value proposition effectively.</p>
                      <p>
                        - Language tailored to resonate with client objectives.
                      </p>

                      <h1>Compelling Case Studies and Success Stories:</h1>
                      <p>- Backs up claims with tangible evidence.</p>
                      <p>
                        - Demonstrates our ability to deliver exceptional
                        results.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade nav-section-content2"
              id="contact4"
              role="tabpanel"
              aria-labelledby="contact-tab4"
            >
              <img
                className="img-fluid w-100 why-choose-us-img"
                src="assest/photos/why-choose-us/ourteam-why-choose-us-small2.png"
                alt="grank"
              />
              <div className="why-choose-us-texting">
                <p>
                  With years of experience in the digital
                  <br />
                  marketing industry, our talented team <br />
                  brings a wealth of expertise. We stay
                  <br /> up-to-date with the latest trends,
                  <br />
                  strategies, and technologies to
                  <br /> ensure your marketing campaigns are <br />
                  always ahead of the curve.
                </p>
                <p>
                  The agency offers services
                  <br /> specifically tailored to meet the
                  <br />
                  unique needs of each client.
                </p>
              </div>
              {/* <div className="container-fluid">
                <div className="row">
                  
                  <div className="col-12 col-md-6 col-lg-6 nav-tab-text">
                
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text4">
                          Your ultimate destination for comprehensive
                          <span className="d-block">
                            digital marketing solutions!
                          </span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          G-Rank recognizes the significance of having an
                          <span className="d-block">
                            effective online presence in the current fast-
                          </span>
                          <span className="d-block">
                            paced and highly competitive business
                          </span>
                          <span className="d-block">landscape.</span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          The agency offers services specifically tailored to
                          <span className="d-block">
                            meet the unique needs of each client.
                          </span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          The agency offers services specifically tailored to
                          <span className="d-block">
                            meet the unique needs of each client.
                          </span>
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text3">
                          G-Rank has grown from nurturing 5 clients to
                          <span className="d-block">
                            captivating over 200 clients by 2023.
                          </span>
                        </span>
                      </li>
                    </ul>
                    <motion.a
                      className="pt-button3"
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Link to="/why-choose-us">
                        <span className="text">Learn More</span>
                      </Link>
                    </motion.a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {/* our team section start */}
        {/* action white start*/}
        <div className="action-white-div-text">
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
              className="action-white-div-buttom"
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div>
        {/* action white end*/}
        {/* Testinomial section start */}
        <section className="testimonial-section-margin">
          <div className="container">
            <h1 className="testinomial-heading">Google Reviews</h1>
            <Slider {...settings2}>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img "
                        src="assest/photos/y-swapna-kumar.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6 " id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img "
                        src="assest/photos/s-rajamouli.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/p-venkateshwarlu.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/m-balu-choudary.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/m-balu-choudary.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6" id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/m-balu-choudary.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6 " id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img"
                        src="assest/photos/m-balu-choudary.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-slider-div">
                <div className="row">
                  <div className="col-12 col-md-6 col-md-6" id="order2">
                    <img
                      className="testimonial-comma"
                      src="assest/photos/comma-new.png"
                    />
                    <motion.div
                      className="testimonial-slider-text"
                      initial={{ opacity: 0, scale: 0, y: 100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      There are two types of people who will tell you that you
                      cannot make a difference in this world: those who are
                      afraid to try and those who are afraid you will succeed.
                    </motion.div>
                  </div>
                  <div className="col-12 col-md-6 col-md-6" id="order1">
                    <div className="testimg">
                      <motion.img
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="img-fluid testinomial-section-img animate__bounceIn"
                        src="assest/photos/m-balu-choudary.jpg"
                        alt="G-Rank"
                      />
                      <div className="testinomial-section-name">
                        <h1>Phakamile Sikali</h1>
                        <h2>Business Owner</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* testinomial section end */}
        {/* client-testinomial-start */}
        <section className="section-margin">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <h2 className="slider-heading2">Client Testimonials</h2>
                <p className="slider-heading-text">
                  Building lasting relationships throught <br />
                  trust !!
                </p>
                {/* <a className="Client-testinomial-buttom" href="#">
                  <span className="text">Read More</span>
                </a> */}
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6">
                    <Slider {...settings4}>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/aparanje-elite.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/flowwell-pumps.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/gayathrisreenath.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/murlikrishna.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/nithinravoos.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </Slider>
                  </div>
                  <div className="col-lg-6" style={{ marginTop: 25 }}>
                    <Slider {...settings5}>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/superolifins.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/sain-medicals.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/rajeshjain.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/taapsirosebay.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/vatsal-ecolife.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                      <div>
                        <div className="client-test-images">
                          <a href="#">
                            <img
                              className="img-fluid background-blue-imgs"
                              src="assest/photos/client-images/vinaya.png"
                              alt="G-Rank"
                            />
                            <p>
                              What a Social network would <br />
                              look like ?{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client-testinomial-end */}
        {/* FAQ section start*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <motion.h2
                  className="slider-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  FAQ & Support
                </motion.h2>
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          onClick={() => setOpen1(!open1)}
                        >
                          What is branding, and why is it essential for
                          businesses ?
                          <span>
                            {open1 ? (
                              <AddIcon className="accordion-arrow" />
                            ) : (
                              <RemoveIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Branding creates a unique and recognizable product,
                          service, or company identity. The significance of
                          branding for businesses lies in its ability to set
                          them apart from competitors, foster customer loyalty,
                          enhance recognition and trust, and shape consumer
                          choices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={() => setOpen2(!open2)}
                        >
                          How do you build a strong brand identity for your
                          business ?
                          <span>
                            {open2 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Branding creates a unique and recognizable product,
                          service, or company identity. The significance of
                          branding for businesses lies in its ability to set
                          them apart from competitors, foster customer loyalty,
                          enhance recognition and trust, and shape consumer
                          choices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={() => setOpen3(!open3)}
                        >
                          What are the essential component of a successful brand
                          strategy ?
                          <span>
                            {open3 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Branding creates a unique and recognizable product,
                          service, or company identity. The significance of
                          branding for businesses lies in its ability to set
                          them apart from competitors, foster customer loyalty,
                          enhance recognition and trust, and shape consumer
                          choices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading4">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                          onClick={() => setOpen4(!open4)}
                        >
                          How can social media help with building and promoting
                          your brand ?
                          <span>
                            {open4 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse4"
                      className="collapse"
                      aria-labelledby="heading4"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Branding creates a unique and recognizable product,
                          service, or company identity. The significance of
                          branding for businesses lies in its ability to set
                          them apart from competitors, foster customer loyalty,
                          enhance recognition and trust, and shape consumer
                          choices.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading5">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link btn-block text-left collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                          onClick={() => setOpen5(!open5)}
                        >
                          Why is consistency important when it comes to branding
                          ?
                          <span>
                            {open5 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="heading5"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Branding creates a unique and recognizable product,
                          service, or company identity. The significance of
                          branding for businesses lies in its ability to set
                          them apart from competitors, foster customer loyalty,
                          enhance recognition and trust, and shape consumer
                          choices.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {isShowMore && (
                  <div className="accordion" id="accordionExample2">
                    <div className="card">
                      <div className="card-header" id="heading6">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                            onClick={() => setOpen6(!open6)}
                          >
                            How can you measure the effectiveness of your
                            branding efforts?
                            <span>
                              {open6 ? (
                                <RemoveIcon className="accordion-arrow" />
                              ) : (
                                <AddIcon className="accordion-arrow" />
                              )}
                            </span>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse6"
                        className="collapse"
                        aria-labelledby="heading6"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <div className="card-body-span">
                            Branding creates a unique and recognizable product,
                            service, or company identity. The significance of
                            branding for businesses lies in its ability to set
                            them apart from competitors, foster customer
                            loyalty, enhance recognition and trust, and shape
                            consumer choices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading7">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse7"
                            aria-expanded="false"
                            aria-controls="collapse7"
                            onClick={() => setOpen7(!open7)}
                          >
                            What are some common mistakes businesses make when
                            it comes to branding?
                            <span>
                              {open7 ? (
                                <RemoveIcon className="accordion-arrow" />
                              ) : (
                                <AddIcon className="accordion-arrow" />
                              )}
                            </span>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse7"
                        className="collapse"
                        aria-labelledby="heading7"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <div className="card-body-span">
                            Branding creates a unique and recognizable product,
                            service, or company identity. The significance of
                            branding for businesses lies in its ability to set
                            them apart from competitors, foster customer
                            loyalty, enhance recognition and trust, and shape
                            consumer choices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="heading8">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse8"
                            aria-expanded="false"
                            aria-controls="collapse8"
                            onClick={() => setOpen8(!open8)}
                          >
                            How can you differentiate your brand from
                            competitors in the market?
                            <span>
                              {open8 ? (
                                <RemoveIcon className="accordion-arrow" />
                              ) : (
                                <AddIcon className="accordion-arrow" />
                              )}
                            </span>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse8"
                        className="collapse"
                        aria-labelledby="heading8"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <div className="card-body-span">
                            Branding creates a unique and recognizable product,
                            service, or company identity. The significance of
                            branding for businesses lies in its ability to set
                            them apart from competitors, foster customer
                            loyalty, enhance recognition and trust, and shape
                            consumer choices.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" id="heading9">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse9"
                            aria-expanded="false"
                            aria-controls="collapse9"
                            onClick={() => setOpen9(!open9)}
                          >
                            How often should you review and update your branding
                            strategy?
                            <span>
                              {open9 ? (
                                <RemoveIcon className="accordion-arrow" />
                              ) : (
                                <AddIcon className="accordion-arrow" />
                              )}
                            </span>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse9"
                        className="collapse"
                        aria-labelledby="heading9"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <div className="card-body-span">
                            Branding creates a unique and recognizable product,
                            service, or company identity. The significance of
                            branding for businesses lies in its ability to set
                            them apart from competitors, foster customer
                            loyalty, enhance recognition and trust, and shape
                            consumer choices.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header" id="heading10">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapse10"
                            aria-expanded="false"
                            aria-controls="collapse10"
                            onClick={() => setOpen10(!open10)}
                          >
                            How does customer perception impact my branding
                            efforts?
                            <span>
                              {open10 ? (
                                <RemoveIcon className="accordion-arrow" />
                              ) : (
                                <AddIcon className="accordion-arrow" />
                              )}
                            </span>
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapse10"
                        className="collapse"
                        aria-labelledby="heading10"
                        data-parent="#accordionExample2"
                      >
                        <div className="card-body">
                          <div className="card-body-span">
                            Branding creates a unique and recognizable product,
                            service, or company identity. The significance of
                            branding for businesses lies in its ability to set
                            them apart from competitors, foster customer
                            loyalty, enhance recognition and trust, and shape
                            consumer choices.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="readmore-button" onClick={toggleReadMoreLess}>
                  {isShowMore ? (
                    <ArrowDropUpIcon className="readmore-up" />
                  ) : (
                    <ArrowDropDownIcon className="readmore-up" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ section end*/}
        {/* action black start*/}
        {/* <div className="action-black-div-text">
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
        </div> */}
        {/* action black end */}
        {/* action white start*/}
        {/* <div className="action-white-div-text">
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
              className="action-white-div-buttom"
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div> */}
        {/* action white end*/}
        {/* action blue start*/}
        {/* <div className="action-blue-div-text">
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
              className="action-blue-div-buttom"
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div> */}
        {/* action blue end*/}
        {/* action yellow start*/}
        {/* <div className="action-yellow-div-text">
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
              className="action-yellow-div-buttom"
              initial={{ opacity: 0, scale: 0, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div> */}
        {/* action yellow end*/}
        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="slider-heading"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links For You
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
        {/* Black-section-div start*/}
        <section>
          <div className="footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/banner-footer32.png"
              alt="G-Rank"
            />
            <div className="footer-div-text">
              <motion.p
                initial={{ opacity: 0, scale: 0, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Are you ready to boost
                <br /> your business ?
              </motion.p>
              <a href="#">
                <motion.p
                  className="footer-div-buttom"
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Contact Us <ArrowRightAltIcon />
                </motion.p>
              </a>
            </div>
          </div>
        </section>
        {/* Black-section-div end*/}
      </section>
    </>
  );
};

export default Homes;
