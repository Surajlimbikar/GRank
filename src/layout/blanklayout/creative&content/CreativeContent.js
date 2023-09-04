import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const CreativeContent = () => {
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

  const settings7 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  const settings8 = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  // Slider section start-----------------------------------------
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-next2"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon className="forword-arrow2" />
      </div>
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-prev2"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <ArrowBackIosIcon className="backword-arrow2" />
      </div>
    );
  }
  return (
    <>
      <section className="section-top">
        <Header />
        {/* banner start */}
        <div className="creative-banner">
          <img
            className="img-fluid w-100"
            src="assest/photos/creative-content/creative-content-banner.png"
            alt="G-Rank"
          />
          <div className="creative-banner-div">
            <h1>Creative & Content</h1>
            <h2>Think Big Think Different</h2>

            <h3 href="#">
              <a href="#">Get Started!</a>
            </h3>
            <div>o</div>
          </div>
        </div>
        {/* banner end */}

        {/* bulb images start */}
        <div className="creative-banner">
          <img
            className="img-fluid w-100"
            src="assest/photos/creative-content/bulb-img.png"
            alt="G-Rank"
          />
          <div className="creative-bulb-banner-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Creativity{" "}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              is our secret
              <br /> recipe
            </motion.h2>
          </div>
        </div>

        {/* bulb images end */}
        {/* slider section start */}
        <div className="container-fluid creative-blue-section">
          <div className="creative-blue-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              The Power of Content in
              <motion.span
                className="d-block"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                Digital Marketing
              </motion.span>
            </motion.h1>
          </div>
          <Slider {...settings7}>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Diverse Content <br />
                  Formats
                </h1>
                <p>
                  We create content in various formats, including videos,
                  infographics, podcasts, and traditional blog posts and social
                  media updates.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Data-Driven <br />
                  Approach
                </h1>
                <p>
                  Our strategy is continuously refined using data analysis for
                  better results and performance.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Engaging
                  <br />
                  Storytelling
                </h1>
                <p>
                  Our experienced team crafts content using storytelling
                  techniques to resonate with the target audience.
                </p>
              </motion.div>
            </div>

            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  SEO <br />
                  Focus
                </h1>
                <p>
                  We prioritize search engine optimization (SEO) by utilizing
                  keywords and optimization techniques to drive organic traffic.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Specialization in
                  <br /> Website Optimization
                </h1>
                <p>
                  Our focus is on website optimization, utilizing the best SEO
                  practices to boost your online presence.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Premium SEO <br />
                  Services
                </h1>
                <p>
                  We offer premium SEO services designed to help you achieve a
                  higher ranking and stay ahead in the digital landscape.
                </p>
              </motion.div>
            </div>
          </Slider>
        </div>
        {/* slider section end */}
        {/* Question mark start */}
        <section className="question-creative-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 question-creative-section-img">
                <img
                  className="img-fluid w-100 "
                  src="assest/photos/creative-content/grey-back.png"
                  alt="G-Rank"
                />
                <img
                  className="img-fluid w-100 shakex question-creative-img"
                  src="assest/photos/creative-content/question-creative.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8 question-creative-div">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Why Choose <span className="d-block">Us?</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  At G-Rank, we understand that creativity knows no bounds, so
                  we strive to provide you with an unparalleled experience that
                  sets us apart from the rest. We bring together a dynamic team
                  of talented individuals passionate about their craft and
                  dedicated to delivering exceptional results.  What truly sets
                  us apart is our endless ideal of creation. When it comes to
                  your creative work, we settle for nothing less than
                  extraordinary. We are no less than a creative bunch of ideas.
                  Whether you're seeking eye-catching graphic design,
                  captivating content creation, or innovative web development,
                  we've got you covered.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* Question mark end */}
        {/* slider up section start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Slider {...settings8}>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon1.png"
                        alt="G-Rank"
                      />
                      <h1>
                        Premium SEO <br />
                        Services
                      </h1>
                      <p className="hid-box">
                        We offer premium SEO services designed to help you
                        achieve a higher ranking and stay ahead in the digital
                        landscape.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1 className="hid-box2">
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <h1>
                      Premium SEO <br />
                      Services
                    </h1>
                    <p className="hid-box">
                      We offer premium SEO services designed to help you achieve
                      a higher ranking and stay ahead in the digital landscape.
                    </p>
                  </motion.div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* slider up section end */}
        {/* flip card start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img1">
                      <h4>Landing Page Content Creation</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        We specialize in crafting engaging and persuasive
                        content for your landing pages. Our team of experienced
                        writers will ensure that your landing pages effectively
                        communicate your message, capture attention, and drive
                        conversions.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img2">
                      <h4>Product and Service Descriptions</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Whether you need compelling content to describe your
                        products or services, our creative writers can create
                        informative and engaging descriptions highlighting their
                        unique features and benefits. We'll help you captivate
                        your audience and increase your sales potentia
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img3">
                      <h4>Portfolio Development</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Showcasing your work effectively is crucial for gaining
                        trust and credibility. Our content marketing services
                        include portfolio development, where we create
                        compelling narratives around your projects and
                        achievements, helping you make a lasting impression on
                        potential clients.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img4">
                      <h4>Whitepaper Content Creation</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        We understand the importance of well-researched and
                        authoritative whitepapers. Our team of experts can
                        create in-depth whitepapers that provide valuable
                        insights and establish your industry expertise.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img5">
                      <h4>Search Engine Optimized (SEO) Content</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Our content marketing services extend to creating
                        SEO-friendly content that helps your website rank higher
                        in search engine results. We strategically incorporate
                        relevant keywords to boost your organic visibility and
                        attract targeted traffic.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img6">
                      <h4>E-Newsletter Content</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Keep your subscribers engaged and informed with our
                        expertly crafted e-newsletter content. Our writers will
                        curate compelling content that resonates with your
                        audience, driving higher open and click-through rates.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img7">
                      <h4>Articles and Blog Posts</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Our talented writers can develop high-quality articles
                        and blog posts tailored to your target audience. From
                        industry trends to informative how-to guides, we create
                        valuable content that keeps readers returning for more.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img8">
                      <h4>Content Proofreading</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Ensure your content is error-free and polished with our
                        professional proofreading services. Our meticulous
                        proofreaders will review your content for grammar,
                        spelling, punctuation, and clarity, ensuring your
                        message is delivered flawlessly.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card end */}

        {/* seo service start */}
        <section className="organic-market-sem-service-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="org-mark-sem-text">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Our SEO Services
                  </motion.h1>
                  <p>
                    We provide a wide range of services related to SEO.
                    <br /> Our services include:{" "}
                  </p>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-seo.png"
                    alt="G-Rank"
                  />
                  <h1>On-Page SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  A team of expert SEOs conducts keyword research according to
                  the niche industry and geographical location.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-seo.png"
                    alt="G-Rank"
                  />
                  <h1>Organic Traffic</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our team aim to generate a lot of organic traffic, so we
                  recommend spending the least on paid advertising.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-seo.png"
                    alt="G-Rank"
                  />
                  <h1>Local SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our experts enhance your Google business profile so your local
                  audience can find you organically.
                </h1>
              </motion.div>
              <div className="col-12 col-md-2 col-ld-2">
                <h1 style={{ display: "none" }}>1</h1>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-social-media.png"
                    alt="G-Rank"
                  />

                  <h1>Technical SEO</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  Our expert technical team works diligently to improve website
                  loading speed, alt text, usability, and other technical
                  aspects of SEO.
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-content-marketing.png"
                    alt="G-Rank"
                  />

                  <h1>Competition Analysis</h1>
                </motion.div>
                <h1 className="organic-market-service-text">
                  We understand the importance of being on top of search engine
                  rankings. Our SEO experts thoroughly understand your
                  competitors and their ranking keywords.
                </h1>
              </motion.div>
            </div>
          </div>
        </section>
        {/* seo service end */}
        {/* what we do section start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 align-self-center">
              <motion.img
                className="img-fluid org-mart-what-img"
                src="assest/photos/organicmarketing/org-mart-logo.png"
                alt="G-Rank"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-12 col-md-8 col-lg-8">
              <div className="org-mart-what-we-do">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  What We Do?
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  At G-Rank, we are the best SEO company in
                  <br /> Hyderabad and Bangalore, offering top-notch services:
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Drive organic traffic, improve search engine rankings,
                  <br /> and maximize online visibility.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Comprehensive services: keyword research,
                  <br /> competitor analysis, on-page optimization, content{" "}
                  <br />
                  creation, and link-building.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Commitment to transparency: regular reports and updates <br />
                  on campaign progress.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  Stay up-to-date with latest trends and algorithm <br />
                  changes to ensure competitiveness in search results.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        {/* what we do section end */}

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

export default CreativeContent;

{
  /* <section className="section-top">
        <div className="pt-bottom-header bgwhite">
          <div className="container p-0">
            <div className="row pt15 pb10 dno">
              <div className="col-12 col-md-5 col-lg-5"></div>

              <div className="col-12 col-md-7 col-lg-7 text-right">
                <div className="hsc text-right">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/grank3.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gpartner2.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gworkspace2.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gcloud3.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/bing.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/rediff.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-menu">
          <div className="container">
            <ul className="second-menu-ul">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Shared Hosting</a>
              </li>
              <li>
                <a href="#">Wordpress Hosting</a>
              </li>
              <li>
                <a href="#">Dadicated Hosting</a>
              </li>
              <li>
                <a href="#">VPS Hosting</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assest/photos/1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="assest/photos/2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="assest/photos/3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div className="col-md-12">
          <div className="below-banner">
            <ul>
              <li className="ywbg">
                <div className="link-area-yb">
                  <a href="reach-us.php">
                    <span>Website Needs</span>
                  </a>
                </div>
              </li>
              <li className="bnbg">
                <div className="link-area-bn">
                  <a href="reach-us.php">
                    <span>Reach Us</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="elementor-icon-list-img"
                    src="assest/photos/why.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="pt-section-title">
                    Why MrCreative <span className="imp-word">?</span>
                  </h5>
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
                          >
                            Why Choose MrCreative ?
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
                          Some placeholder content for the first accordion
                          panel. This panel is shown by default, thanks to the{" "}
                          <code>.show</code> class.
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
                          >
                            What We Offer ?
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
                          Some placeholder content for the second accordion
                          panel. This panel is hidden by default.
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
                          >
                            Do You Promote Website ?
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
                          And lastly, the placeholder content for the third and
                          final accordion panel. This panel is hidden by
                          default.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <h5 className="pt-section-title">
                    Everything You <span className="imp-word">Need</span> to Get
                    Online
                  </h5>
                </div>
                <div className="col-12">
                  <img
                    className="elementor-icon-list-img"
                    src="assest/photos/every.jpg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="elementor-icon-list-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    We have 100’s of domains to choose from, not to mention
                    prices that other companies only dream about.
                  </span>
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Over all happy customers and best technology with great
                    support and security is our strength.
                  </span>
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    With our world-class control panel and industry-beating
                    prices, we can help you get the best out of your domain
                    portfolio.
                  </span>
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Not sure what you need? That’s why we have hundreds of
                    smart, friendly web pros waiting by the phone. Just call
                    +91-8522 953 903
                  </span>
                </li>
              </ul>
              <a className="pt-button" href="#">
                <span className="text">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-section-title-1 text-center">
              <h5 className="pt-section-title">
                Quick Links <span className="imp-word">For</span> You
              </h5>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Register a Domain
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Transfer a Domain
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Linux Hosting
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Wordpress Hosting
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Google Workspace
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Microsoft Office 365
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Rediff Mails
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    SSL Certificate
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Bootstrap Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Custom Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    ECommerce Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Wordpress Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
