import React from "react";
const CreativeContent = () => {
  return (
    <>
      {/* <section className="section-top">
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
      </section> */}
    </>
  );
};

export default CreativeContent;
