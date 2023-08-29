import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  // const texts = [
  //   "search for domain booking…",
  //   "search for domain booking…",
  //   "search for domain booking…",
  // ];
  // const input = document.querySelector("#searchbox");
  // const animationWorker = function (input, texts) {
  //   this.input = input;
  //   this.defaultPlaceholder = this.input.getAttribute("placeholder");
  //   this.texts = texts;
  //   this.curTextNum = 0;
  //   this.curPlaceholder = "";
  //   this.blinkCounter = 0;
  //   this.animationFrameId = 0;
  //   this.animationActive = false;
  //   this.input.setAttribute("placeholder", this.curPlaceholder);

  //   this.switch = (timeout) => {
  //     this.input.classList.add("imitatefocus");
  //     setTimeout(() => {
  //       this.input.classList.remove("imitatefocus");
  //       if (this.curTextNum == 0)
  //         this.input.setAttribute("placeholder", this.defaultPlaceholder);
  //       else this.input.setAttribute("placeholder", this.curPlaceholder);

  //       setTimeout(() => {
  //         this.input.setAttribute("placeholder", this.curPlaceholder);
  //         if (this.animationActive)
  //           this.animationFrameId = window.requestAnimationFrame(this.animate);
  //       }, timeout);
  //     }, timeout);
  //   };

  //   this.animate = () => {
  //     if (!this.animationActive) return;
  //     let curPlaceholderFullText = this.texts[this.curTextNum];
  //     let timeout = 900;
  //     if (
  //       this.curPlaceholder == curPlaceholderFullText + "|" &&
  //       this.blinkCounter == 3
  //     ) {
  //       this.blinkCounter = 0;
  //       this.curTextNum =
  //         this.curTextNum >= this.texts.length - 1 ? 0 : this.curTextNum + 1;
  //       this.curPlaceholder = "|";
  //       this.switch(2000);
  //       return;
  //     } else if (
  //       this.curPlaceholder == curPlaceholderFullText + "|" &&
  //       this.blinkCounter < 3
  //     ) {
  //       this.curPlaceholder = curPlaceholderFullText;
  //       this.blinkCounter++;
  //     } else if (
  //       this.curPlaceholder == curPlaceholderFullText &&
  //       this.blinkCounter < 3
  //     ) {
  //       this.curPlaceholder = this.curPlaceholder + "|";
  //     } else {
  //       this.curPlaceholder =
  //         curPlaceholderFullText
  //           .split("")
  //           .slice(0, this.curPlaceholder.length + 1)
  //           .join("") + "|";
  //       timeout = 150;
  //     }
  //     this.input.setAttribute("placeholder", this.curPlaceholder);
  //     setTimeout(() => {
  //       if (this.animationActive)
  //         this.animationFrameId = window.requestAnimationFrame(this.animate);
  //     }, timeout);
  //   };

  //   this.stop = () => {
  //     this.animationActive = false;
  //     window.cancelAnimationFrame(this.animationFrameId);
  //   };

  //   this.start = () => {
  //     this.animationActive = true;
  //     this.animationFrameId = window.requestAnimationFrame(this.animate);
  //     return this;
  //   };
  // };

  // document.addEventListener("DOMContentLoaded", () => {
  //   let aw = new animationWorker(input, texts).start();
  //   input.addEventListener("focus", (e) => aw.stop());
  //   input.addEventListener("blur", (e) => {
  //     aw = new animationWorker(input, texts);
  //     if (e.target.value == "") setTimeout(aw.start, 2000);
  //   });
  // });

  return (
    <>
      <div className="pt-bottom-header bgwhite">
        <div className="container">
          <div className="row pt15 pb10 dno">
            <div className="col-12 col-md-6 col-lg-6 search-div">
              <form className="search-box-form" action="#">
                <button type="submit" className="login-btn">
                  <IconButton color="primary">
                    <SearchIcon />
                  </IconButton>
                </button>
                <input
                  className="login-inp"
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="search for domain booking…"
                />
                {/* <input
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                /> */}
              </form>
              {/* <div class="centered">
                <input
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </div> */}
              {/* <form class="search-box-form" action="#">
                <button type="submit" class="login-btn">
                  <i class="fa fa-search"></i>
                </button>
                <input
                  class="login-inp"
                  type="text"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </form> */}
            </div>
            {/* <div class="col-md-5">
              <form class="search-box-form" action="#">
                <button type="submit" class="login-btn">
                  <i class="fa fa-search"></i>
                </button>
                <input
                  class="login-inp"
                  type="texts"
                  id="searchbox"
                  name="searchbox"
                  placeholder="Search term"
                />
              </form>
            </div> */}

            {/* <div className="col-0 col-md-0 col-lg-2"></div> */}

            <div className="col-12 col-md-6 col-lg-6 text-rig">
              <div className="row  text-rig">
                <div className="col-12">
                  <ul className="icon-top-ul">
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-partner-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/meta-partner-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-workspace-big.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/google-cloud-big.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/microsoft-logo.png"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/rediff.jpg"
                          alt="G-Rank"
                          className="img-fluid "
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-menu">
        <div className="container">
          <ul className="second-menu-ul">
            <li className="parent-menu">
              <a className="about-us" href="#">
                {/* About Us <i className="fa-sharp fa-solid fa-caret-down"></i> */}
                About Us <ArrowDropDownIcon className="drop-arrow" />
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
              </a>
              <ul className="child-menu">
                <li className="parent-submenu">
                  {/* <a className="about-us-submenu" href="#"> */}
                  Industries
                  {/* </a> */}
                  <ul className="child-submenu">
                    <li className="parent-thirdmenu">
                      B2B
                      <ul className="child-thirdmenu">
                        <li>Pharma</li>
                        <li>Power</li>
                        <li>HardWare</li>
                        <li>Healthcare</li>
                        <li>Tech</li>
                        <li>Manufacturing</li>
                        <li>Raw Material</li>
                      </ul>
                    </li>
                    <li className="parent-thirdmenu">
                      B2C
                      <ul className="child-thirdmenu">
                        <li>Real ESTATE</li>
                        <li>Healthcare</li>
                        <li>E-commerce</li>
                        <li>Lifestyle</li>
                        <li>Interiors & Furniture</li>
                        <li>Education</li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>Case Studies</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
              {/* <ul className="child-menu">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-2 p-0">
                      <ul className="nav nav-tabs10" id="myTab" role="tablist">
                        <li className="nav-item10" role="presentation">
                          <button
                            className="nav-link10 active"
                            id="home-tab10"
                            data-toggle="tab"
                            data-target="#home10"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Blog-4-Column
                          </button>
                        </li>
                        <li className="nav-item10" role="presentation">
                          <button
                            className="nav-link10"
                            id="profile-tab10"
                            data-toggle="tab"
                            data-target="#profile10"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Blog-3-Column
                          </button>
                        </li>
                        <li className="nav-item10" role="presentation">
                          <button
                            className="nav-link10"
                            id="contact-tab10"
                            data-toggle="tab"
                            data-target="#contact10"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Blog-2-Column
                          </button>
                        </li>
                        <li className="nav-item10" role="presentation">
                          <button
                            className="nav-link10"
                            id="product-tab10"
                            data-toggle="tab"
                            data-target="#product10"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Blog-Artical-List
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-10">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home10"
                          role="tabpanel"
                          aria-labelledby="home-tab10"
                        >
                          <div className="row">
                            <div className="col-lg-2 ruby">
                              <img
                                src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                alt="G-Rank"
                              />
                              <div className="ruby-c-inline">
                                <span className="ruby-c-category">
                                  <a href="#">News / Travel</a>
                                </span>
                                <span className="ruby-c-date">
                                  <a href="#">05/01/2017</a>
                                </span>
                              </div>
                              <span className="ruby-c-title ruby-margin-10">
                                <a href="#">
                                  Vacation Proved To Increase Productivity
                                </a>
                              </span>
                              <span className="ruby-c-content">
                                The primary research for the study was based on
                                an online survey that was...
                              </span>
                            </div>
                            <div className="col-lg-2 ruby">
                              <img
                                src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                alt="G-Rank"
                              />
                              <div className="ruby-c-inline">
                                <span className="ruby-c-category">
                                  <a href="#">News / Travel</a>
                                </span>
                                <span className="ruby-c-date">
                                  <a href="#">05/01/2017</a>
                                </span>
                              </div>
                              <span className="ruby-c-title ruby-margin-10">
                                <a href="#">
                                  Vacation Proved To Increase Productivity
                                </a>
                              </span>
                              <span className="ruby-c-content">
                                The primary research for the study was based on
                                an online survey that was...
                              </span>
                            </div>
                            <div className="col-lg-2 ruby">
                              <img
                                src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                alt="G-Rank"
                              />
                              <div className="ruby-c-inline">
                                <span className="ruby-c-category">
                                  <a href="#">News / Travel</a>
                                </span>
                                <span className="ruby-c-date">
                                  <a href="#">05/01/2017</a>
                                </span>
                              </div>
                              <span className="ruby-c-title ruby-margin-10">
                                <a href="#">
                                  Vacation Proved To Increase Productivity
                                </a>
                              </span>
                              <span className="ruby-c-content">
                                The primary research for the study was based on
                                an online survey that was...
                              </span>
                            </div>
                            <div className="col-lg-2 ruby">
                              <img
                                src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                alt="G-Rank"
                              />
                              <div className="ruby-c-inline">
                                <span className="ruby-c-category">
                                  <a href="#">News / Travel</a>
                                </span>
                                <span className="ruby-c-date">
                                  <a href="#">05/01/2017</a>
                                </span>
                              </div>
                              <span className="ruby-c-title ruby-margin-10">
                                <a href="#">
                                  Vacation Proved To Increase Productivity
                                </a>
                              </span>
                              <span className="ruby-c-content">
                                The primary research for the study was based on
                                an online survey that was...
                              </span>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-2"></div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile10"
                          role="tabpanel"
                          aria-labelledby="profile-tab10"
                        >
                          <div className="row">
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact10"
                          role="tabpanel"
                          aria-labelledby="contact-tab10"
                        >
                          <div className="row">
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-4 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                                <div className="ruby-c-inline2">
                                  <span className="ruby-c-category2">
                                    <a href="#">News / Travel</a>
                                  </span>
                                  <span className="ruby-c-date2">
                                    <a href="#">05/01/2017</a>
                                  </span>
                                </div>
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    Vacation Proved To Increase Productivity
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="product10"
                          role="tabpanel"
                          aria-labelledby="product-tab10"
                        >
                          <div className="row">
                            <div className="col-lg-6 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    An Erupting Volcano And A Meteor Has Created
                                    A Fantastic View
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6 ruby2">
                              <div>
                                <img
                                  src="http://brienlabs.com/ruby-mega-menu/img/travel-1.jpg"
                                  alt="G-Rank"
                                />
                              </div>
                              <div className="ruby-div">
                                <span className="ruby-c-title2 ruby-margin-10">
                                  <a href="#">
                                    An Erupting Volcano And A Meteor Has Created
                                    A Fantastic View
                                  </a>
                                </span>
                                <span className="ruby-c-content2">
                                  The primary research for the study was based
                                  on an online survey that was...
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul> */}
            </li>
            <li className="parent-menu">
              <a className="about-us" href="#">
                Domain
              </a>
              <ul className="child-menu">
                <li>Domain Booking</li>
                <li>Domain Available</li>
                <li>Domain Transfer</li>
              </ul>
            </li>
            <li className="parent-menu">
              <a className="about-us" href="#">
                Hosting
              </a>
              <ul className="child-menu">
                <li>Shared Hosting</li>
                <li>Wordpress Hosting</li>
                <li>Dedicated Hosting</li>
                <li>VPS Hosting</li>
              </ul>
            </li>
            <li className="parent-menu">
              <a className="about-us" href="#">
                Security
              </a>
              <ul className="child-menu">
                <li>Standard SSL</li>
                <li>Wildcard SSL</li>
                <li>Organization Vaidation SSL (OV SSL)</li>
                <li>Extended Validation SSL (EVSSL)</li>
              </ul>
            </li>
            <li className="parent-menu">
              <a className="about-us" href="#">
                Email
              </a>
              <ul className="child-menu">
                <li>Google Workspace</li>
                <li>Microsoft 365</li>
                <li>Rediff Mail</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
