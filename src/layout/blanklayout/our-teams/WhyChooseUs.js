import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <>
      <section className="section-top">
        <Header />
        <img
          className="img-fluid w-100 "
          src="assest/photos/why-choose-us/ourteam-why-choose-us.png"
          alt="G-Rank"
        />
        <div className="header-div-why-choose-us">
          <motion.h4
            className="header-why-choose-us"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.h4>
        </div>
        <p className="passage-what-we-do">
          Your ultimate destination for comprehensive digital marketing
          solutions!
        </p>
        <div className="container">
          <p className="passage-what-we-do2">
            G-Rank understands the importance of an effective online presence in
            today's fast-paced, highly competitive business landscape. That's
            why we offer services tailored to meet your unique needs and drive
            your business towards success.
          </p>
          <p className="passage-what-we-do2">
            With years of experience in the digital marketing industry, our
            talented team brings a wealth of expertise. We stay up-to-date with
            the latest trends, strategies, and technologies to ensure your
            marketing campaigns are always ahead of the curve.
          </p>
          <p className="passage-what-we-do2">
            We believe every business is unique, so we have a personalized
            approach for each client. Whether you need assistance with search
            engine optimization (SEO), pay-per-click (PPC) advertising, social
            media marketing, or content creation, we've got you covered.
          </p>
          <p className="passage-what-we-do2">
            We have a proven track record of helping businesses across various
            industries achieve their marketing goals and grow their online
            presence. Don't just take our word for it – check out our client
            success stories and testimonials to see the results we've delivered.
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

export default WhyChooseUs;
