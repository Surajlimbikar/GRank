import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <>
      <section className="section-top">
        <Header />
        <img
          className="img-fluid w-100 "
          src="assest/photos/what-we-do/what-we-banner.png"
          alt="G-Rank"
        />

        <p className="passage-what-we-do">Powering business since 2010!</p>
        <div className="container">
          <p className="passage-what-we-do2">
            G-Rank Digital Marketing Agency has been a trusted partner for
            businesses in India for more than a decade, providing expert digital
            marketing solutions that drive success. Our deep expertise spans
            various sectors, and our dedicated team is committed to helping
            companies thrive. As a comprehensive marketing agency, we utilize
            all available tools to connect with your target audience and
            generate high-quality leads. The outcome? A measurable boost in
            sales and revenue for your business.
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

export default WhatWeDo;
