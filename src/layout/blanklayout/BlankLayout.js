import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";
import Homes from "./branding/Homes";
import Socialmedia from "./social-media/Socialmedia";
import Webdevelop from "./web-develop/Webdevelop";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import Branding from "./branding/Branding";
import BrandingConsulting from "./branding/BrandingConsulting";
import BrandStrategy from "./branding/BrandStrategy";
import BrandPositioning from "./branding/BrandPositioning";
import BrandIdentity from "./branding/BrandIdentity";
import BrandCommunication from "./branding/BrandCommunication";
import CreativeContent from "./creative&content/CreativeContent";
import DisplayAds from "./creative&content/DisplayAds";
import WebDesign from "./creative&content/WebDesign";
import PrintDesign from "./creative&content/PrintDesign";
import ContentMarketing from "./creative&content/ContentMarketing";
import OrganicMarketing from "./organicmarketing/OrganicMarketing";
import SearchEngineOpt from "./organicmarketing/SearchEngineOpt";
import SocialMediaOpt from "./organicmarketing/SocialMediaOpt";
import PerformanceMarketing from "./performancemarketing/PerformanceMarketing";
import SearchEngineMarketing from "./performancemarketing/SearchEngineMarketing";
import SocialMediaMarketing from "./performancemarketing/SocialMediaMarketing";
import OrganicMarket from "./social-media/OrganicMarket";
import PaidMarketing from "./social-media/PaidMarketing";
import WorkPressDev from "./web-develop/WorkPressDev";
import EcommerceDev from "./web-develop/EcommerceDev";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import OurStory from "./our-teams/OurStory";
import WhatWeDo from "./our-teams/WhatWeDo";
import OurMethodology from "./our-teams/OurMethodology";
import WhyChooseUs from "./our-teams/WhyChooseUs";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// accordion section

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const BlankLayout = () => {
  // accordion section start
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // accordion section end
  // toggle button section start
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="toggle-icon">
          <img src="assest/photos/grank.png" />
        </div>
        <div>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              sx={{
                backgroundColor: "#fff",
                color: "#0062cc",
              }}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography sx={{ fontSize: 15 }}>Branding</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Brand Consulting
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Brand Strategy
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Brand Position
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Brand Identity
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 4,
                  paddingBottom: 1,
                  borderBottom: "1px solid #ccc",
                }}
              >
                Brand Communication
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#fff", color: "#0062cc" }}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Performance Marketing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Search Engine Marketing
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 4,
                  paddingBottom: 1,
                  borderBottom: "1px solid #ccc",
                }}
              >
                Social Media Marketing
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#fff", color: "#0062cc" }}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Organic Marketing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 3,
                  paddingBottom: 1,
                }}
              >
                Search Engine Optimization
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 3,
                  paddingBottom: 1,
                  // borderBottom: "1px solid #ccc",
                }}
              >
                Social Media Optimization
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#fff", color: "#0062cc" }}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Creative & Content</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Display Ads
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Web Design
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Print Design
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 4,
                  paddingBottom: 1,
                  borderBottom: "1px solid #ccc",
                }}
              >
                Content Marketing
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#fff", color: "#0062cc" }}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Social Media</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                Organic Marketing
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 4,
                  paddingBottom: 1,
                  borderBottom: "1px solid #ccc",
                }}
              >
                Paid Marketing
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ borderBottom: "none", borderTop: "none" }}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              sx={{ backgroundColor: "#fff", color: "#0062cc" }}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography className="accordian-summery">
                Web Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  marginLeft: 4,
                  paddingBottom: 1,
                }}
              >
                WorkPress Development
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "#0062cc",
                  paddingLeft: 4,
                  paddingBottom: 1,
                  borderBottom: "1px solid #ccc",
                }}
              >
                Ecommerce Development
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </List>
      <div className="toggle-media-section">
        <div className="toggle-media-div">
          <FacebookIcon className="toggle-media-icon" />
          <TwitterIcon className="toggle-media-icon" />
          <WhatsAppIcon className="toggle-media-icon" />
          <YouTubeIcon className="toggle-media-icon" />
          <InstagramIcon className="toggle-media-icon" />
        </div>
        <div className="toggle-media-copyright">
          <h2>Copyright © 2023 MrCreative All Rights Reserved.</h2>
        </div>
      </div>
    </Box>
  );
  // toggle section button end

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
          <div className="container-fluid menu-inner1">
            <div className="row collapse navbar-collapse">
              <div className="col-md-12 tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="brand-consulting"
                      >
                        Brand Consulting
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="brand-strategy"
                      >
                        Brand Strategy
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="brand-positioning"
                      >
                        Brand Positioning
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="brand-identity"
                      >
                        Brand Identity
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="brand-communication"
                      >
                        Brand Communication
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="display-ads"
                      >
                        Display Ads
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="web-design"
                      >
                        Web Design
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="print-design"
                      >
                        Print Design
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="content-marketing"
                      >
                        Content Marketing
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="search-engine-optimization"
                      >
                        Search Engine Optimization
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="social-media-optimization"
                      >
                        Social Media Optimization
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div
                  className="tab-pane fade"
                  id="Booking"
                  role="tabpanel"
                  aria-labelledby="booking-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="search-engine-marketing"
                      >
                        Search Engine Marketing
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="social-media-marketing"
                      >
                        Social-Media Marketing
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="social"
                  role="tabpanel"
                  aria-labelledby="social-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="organic-marketings"
                      >
                        Organic Marketing
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="paid-marketing"
                      >
                        Paid Marketing
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="devlopment"
                  role="tabpanel"
                  aria-labelledby="devlopment-tab"
                >
                  <ul className="first-tabs">
                    <li>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="work-press-development"
                      >
                        WorkPress Development
                      </NavLink>
                      <NavLink
                        style={({ isActive }) => ({
                          color: isActive ? "#fed501" : "#436fe8",
                        })}
                        to="ecommerce-development"
                      >
                        Ecommerce Development
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* navbar2 */}
        <nav className="navbar navbar-expand-lg navbar-light back-ground-color p-0">
          <div className="container-fluid menu-inner">
            <NavLink id="RouterNavLink" to="/">
              <a className="navbar-brand" href="#">
                <img src="assest/photos/g-rank-white-logo.png" alt="logo" />
              </a>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent2"
              aria-controls="navbarSupportedContent2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <div className="menuicon-mobile">
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      {/* {anchor} */}
                      <MenuIcon />
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </button>

            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav nav  m-auto " id="myTab" role="tablist">
                {/* <li className="nav-item">
                  <span
                    className="nav-link show active"
                    href="#"
                    id="home-tab"
                    data-toggle="tab"
                    data-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <img src="assest/photos/black-shadow.png" />
                  </span>
                </li> */}
                <li className="nav-item">
                  <span
                    className="nav-link show active"
                    href="#"
                    id="home-tab"
                    data-toggle="tab"
                    data-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/branding"
                    >
                      BRANDING
                    </NavLink>
                  </span>
                </li>

                <li className="nav-item ">
                  <span
                    className="nav-link"
                    href="#"
                    id="Booking-tab"
                    data-toggle="tab"
                    data-target="#Booking"
                    type="button"
                    role="tab"
                    aria-controls="Booking"
                    aria-selected="false"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/performance-marketing"
                    >
                      PERFORMANCE MARKETING
                    </NavLink>
                  </span>
                </li>

                <li className="nav-item ">
                  <span
                    className="nav-link"
                    href="#"
                    id="contact-tab"
                    data-toggle="tab"
                    data-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/organic-marketing"
                    >
                      ORGANIC MARKETING
                    </NavLink>
                  </span>
                </li>

                <li className="nav-item ">
                  <span
                    className="nav-link"
                    href="#"
                    id="profile-tab"
                    data-toggle="tab"
                    data-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="Profile"
                    aria-selected="false"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/creative&content"
                    >
                      CREATIVE & CONTENT
                    </NavLink>
                    {/* <Link id="RouterNavLink" style={None} to="/contact">anywords</Link> */}
                  </span>
                </li>
                <li className="nav-item ">
                  <span
                    className="nav-link"
                    href="#"
                    id="social-tab"
                    data-toggle="tab"
                    data-target="#social"
                    type="button"
                    role="tab"
                    aria-controls="social"
                    aria-selected="false"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/social-media"
                    >
                      SOCIAL MEDIA
                    </NavLink>
                  </span>
                </li>
                <li className="nav-item ">
                  <span
                    className="nav-link"
                    href="#"
                    id="devlopment-tab"
                    data-toggle="tab"
                    data-target="#devlopment"
                    type="button"
                    role="tab"
                    aria-controls="devlopment"
                    aria-selected="false"
                  >
                    <img
                      className="nav-link-img"
                      src="assest/photos/black-shadow.png"
                    />
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#fed501" : "#fff",
                      })}
                      id="RouterNavLink"
                      to="/webdeveloper"
                    >
                      WEB DEVELOPMENT
                    </NavLink>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
          <div className="menu-inner3">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav nav-tabs mr-auto nav-mobile"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">domail</li>

                <li className="nav-item ">hosting</li>

                <li className="nav-item ">security</li>

                <li className="nav-item ">email</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* routes here */}

      <Routes>
        {/* http://localhost:3000/ */}

        <Route path="" element={<Homes />} />
        <Route path="branding" element={<Branding />} />
        <Route path="brand-consulting" element={<BrandingConsulting />} />
        <Route path="brand-strategy" element={<BrandStrategy />} />
        <Route path="brand-positioning" element={<BrandPositioning />} />
        <Route path="brand-identity" element={<BrandIdentity />} />
        <Route path="brand-communication" element={<BrandCommunication />} />

        {/* http://localhost:3000/Hosting */}
        <Route path="creative&content" element={<CreativeContent />} />
        <Route path="display-ads" element={<DisplayAds />} />
        <Route path="web-design" element={<WebDesign />} />
        <Route path="print-design" element={<PrintDesign />} />
        <Route path="content-marketing" element={<ContentMarketing />} />

        {/* http://localhost:3000/security */}
        <Route path="organic-marketing" element={<OrganicMarketing />} />
        <Route
          path="search-engine-optimization"
          element={<SearchEngineOpt />}
        />
        <Route path="social-media-optimization" element={<SocialMediaOpt />} />

        {/* http://localhost:3000/Email */}
        <Route
          path="performance-marketing"
          element={<PerformanceMarketing />}
        />
        <Route
          path="search-engine-marketing"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="social-media-marketing"
          element={<SocialMediaMarketing />}
        />

        {/* http://localhost:3000/Email */}
        <Route path="social-media" element={<Socialmedia />} />
        <Route path="organic-marketings" element={<OrganicMarket />} />
        <Route path="paid-marketing" element={<PaidMarketing />} />

        {/* http://localhost:3000/Email */}
        <Route path="webdeveloper" element={<Webdevelop />} />
        <Route path="work-press-development" element={<WorkPressDev />} />
        <Route path="ecommerce-development" element={<EcommerceDev />} />

        {/* http://localhost:3000/Login */}
        <Route path="login" element={<Login />} />

        {/* http://localhost:3000/Register */}
        <Route path="register" element={<Register />} />

        {/* http://localhost:3000/whatwedo */}
        <Route path="our-story" element={<OurStory />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="our-methodology" element={<OurMethodology />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
      </Routes>

      {/* routes here */}

      {/* footer part */}

      <footer id="pt-footer">
        <div className="pt-footer-style-1">
          <div className="footer-back">
            <div className="container py-4">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Our Products</h4>
                    <div className="menu-our-products-container">
                      <ul id="menu-our-products" className="menu">
                        <li
                          id="menu-item-2195"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2195"
                        >
                          <a href="#">Branding</a>
                        </li>
                        <li
                          id="menu-item-2196"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2196"
                        >
                          <a href="#">Performance Marketing</a>
                        </li>
                        <li
                          id="menu-item-2197"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2197"
                        >
                          <a href="#">Organic Marketing</a>
                        </li>
                        <li
                          id="menu-item-2198"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2198"
                        >
                          <a href="#">Creative & Content</a>
                        </li>
                        <li
                          id="menu-item-2199"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2199"
                        >
                          <a href="#">Social Media</a>
                        </li>
                        <li
                          id="menu-item-12941"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12941"
                        >
                          <a href="chatbot/index.html">Web Development</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">About G-rank</h4>
                    <div className="menu-about-mrcretive-container">
                      <ul id="menu-about-mrcretive" className="menu">
                        <li
                          id="menu-item-3919"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3919"
                        >
                          <a href="#">About Us</a>
                        </li>
                        <li
                          id="menu-item-3920"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3920"
                        >
                          <a href="#">Case Studies</a>
                        </li>

                        <li
                          id="menu-item-3921"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3921"
                        >
                          <a href="#">Careers</a>
                        </li>
                        <li
                          id="menu-item-3923"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3923"
                        >
                          <a href="#">Blogs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Hyderabad</h4>
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="pt-contact">
                          <li>
                            <LocationOnIcon />
                            <span>
                              1-8-382, Ground Floor, Queen’s Plaza,
                              Begumpet,Hyderabad – 500003
                            </span>
                          </li>
                          <li>
                            <a href="tel:+918522953903">
                              <CallIcon />
                              <span>+91 8522953903</span>
                            </a>
                          </li>
                          <li>
                            <a href="mailto:server@mrcreative.co.in">
                              <MailIcon />
                              <span>server@grank.co.in</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="wp-block-columns">
                      <div className="wp-block-column"></div>
                      <div className="wp-block-column"></div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="widget">
                    <h4 className="footer-title">Bengaluru</h4>
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="pt-contact">
                          <li>
                            <LocationOnIcon />
                            <span>
                              2nd Floor, R K Lake Tower, Service Road, Subramani
                              Nagar, Guddadahalli, Hebbal, Bengaluru,
                              Karnataka-560024
                            </span>
                          </li>
                          <li>
                            <a href="tel:+918522953903">
                              <CallIcon />
                              <span>+91 8522953903</span>
                            </a>
                          </li>
                          <li>
                            <a href="mailto:server@mrcreative.co.in">
                              <MailIcon />
                              <span>server@grank.co.in</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <div className="wp-block-columns">
                      <div className="wp-block-column"></div>
                      <div className="wp-block-column"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-back2">
            <div className=" footer-white-bg-padding">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="row">
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/google-partner-big.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img"
                            />
                          </a>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/meta-partner-big.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img2"
                            />
                          </a>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/google-workspace-big.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12">
                      <div className="row">
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/google-cloud-big.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img2"
                            />
                          </a>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/rediff-big.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img"
                            />
                          </a>
                        </div>
                        <div className="col-4 col-md-4 col-lg-4">
                          <a href="#">
                            <img
                              src="assest/photos/microsoft-logo.png"
                              alt="G-Rank"
                              className="img-fluid footer-icon-img"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 mt50">
                  <div className="widget">
                    <div className="row">
                      <div className="col-sm-12 text-align-div">
                        <img
                          src="assest/photos/g-rank-white-logo.png"
                          className="pt-footer-logo"
                          alt="gym-footer-logo"
                        />
                        <p className="grank-title">
                          G-Rank - Digital Marketing Partner an ISO 9001:2008
                          certified company, established in 2010, is leading
                          Digital Marketing company. We strategize and deliver
                          pertinent digital marketing campaigns that adds value
                          to the client`s bottom line. We are a proud holder of
                          Google Certified Partnership since 2011.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-back3"></div>

          <div className="pt-copyright-footer">
            <div className="container">
              <div className="row">
                <div
                  className="col-12 col-md-6 col-lg-6 align-self-center"
                  id="order2"
                >
                  <span className="pt-copyright">
                    <a target="_blank" href="#">
                      {" "}
                      Copyright © 2023 MrCreative All Rights Reserved.
                    </a>
                  </span>
                </div>

                <div className="col-12 col-md-6 col-lg-6" id="order1">
                  <div className="pt-footer-social">
                    <ul>
                      {/* <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li> */}

                      <li>
                        <IconButton color="primary">
                          <YouTubeIcon />
                        </IconButton>
                      </li>
                      <li>
                        <IconButton color="primary">
                          <FacebookIcon />
                        </IconButton>
                      </li>
                      <li>
                        <IconButton color="primary">
                          <InstagramIcon />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton color="primary">
                          <WhatsAppIcon />
                        </IconButton>
                      </li>

                      <li>
                        <IconButton color="primary">
                          <TwitterIcon color="#fff" />
                        </IconButton>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BlankLayout;
