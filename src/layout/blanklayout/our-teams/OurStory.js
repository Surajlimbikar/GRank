import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <>
      <section className="section-top">
        <Header />

        <img
          className="img-fluid w-100 "
          src="assest/photos/what-we-do/what-we-do-banner2.png"
          alt="G-Rank"
        />

        <motion.h4
          className="header-what-we-do"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h4>
        {/* <p className="passage-what-we-do">Powering business since 2010!</p> */}

        <div className="container">
          <p className="passage-what-we-do2">
            Established in 2010, G-Rank is more than just a digital marketing
            agency. We are growth innovators, weaving an ecosystem that provides
            end-to-end digital solutions across India. Our unwavering commitment
            to growth can be seen in our journey from nurturing 5 clients to
            captivating over 200 by 2023.
          </p>
          <p className="passage-what-we-do2">
            We offer many services encompassing search engine optimization,
            social media marketing, website design, logo creation, paid
            marketing, content management, market automation, website hosting,
            and more.
          </p>
          <p className="passage-what-we-do2">
            Our dedicated team of experts delves deep into understanding your
            project requirements, leaving no detail unexplored. Our experts
            meticulously examine your company profile, allowing them to create a
            strong marketing plan that focuses on higher growth.
          </p>
          <p className="passage-what-we-do2">
            The five cornerstones of our company's foundation are customers,
            employees, planning, performance, and profit. By following these, we
            navigate the boundless cosmos of digital marketing and transform
            brand awareness into captivating leads. Our team of strategic and
            data-driven digital wizards not only work but breathe life into
            every project. Our clients choose us for our expertise and the
            unwavering confidence we instill in their hearts repeatedly.
          </p>
          <p className="passage-what-we-do2">
            With headquarters in Bangalore and Hyderabad, G-Rank holds the layer
            of being a top-ranking digital marketing company. A decade of
            expertise and insight gained through high-impact projects and
            groundbreaking marketing campaigns fuels our ingenuity. Our offices
            serve not just as contact points but also as preserves where the
            magic happens.
          </p>
          <p className="passage-what-we-do2">
            G-Rank isn't just a digital marketing agency; it's a journey of
            passion, creativity, and unwavering dedication to turning dreams
            into digital reality.
          </p>
        </div>
        <img className="combined-img" src="assest/photos/combined-shape2.png" />
        <img
          className="img-fluid w-100"
          src="assest/photos/banner-footer32.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default OurStory;
