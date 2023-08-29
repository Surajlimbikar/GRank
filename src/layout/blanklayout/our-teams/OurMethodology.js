import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";

const OurMethodology = () => {
  return (
    <>
      <section className="section-top">
        <Header />
        <img
          className="img-fluid w-100 "
          src="assest/photos/methodology/methodo-banner.png"
          alt="G-Rank"
        />

        {/* <p className="passage-what-we-do">Powering business since 2010!</p> */}
        <div className="container">
          <h1 className="heading-methodology2">Our Methodology</h1>
          <p className="passage-methodology2">
            Our methodology encompasses a unique blend of ingredients that
            position us to captivate and secure our clients. We are committed to
            ensuring our clients grasp the advantages and practicality of
            partnering with us. We aim to expand their vision beyond a limited
            perspective and encourage them to envision their business on a grand
            scale. We employ clear and concise communication to achieve this,
            conveying our value proposition in language that resonates with
            their objectives. Our methodology backs up our claims with
            compelling case studies and success stories, providing tangible
            evidence of our ability to deliver exceptional results. Furthermore,
            we utilize visualization techniques, employing visual aids and
            interactive demonstrations to immerse clients in our proposed
            solutions. Our comprehensive approach establishes trust, fosters
            understanding, and inspires clients to embrace transformative
            possibilities.
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

export default OurMethodology;
