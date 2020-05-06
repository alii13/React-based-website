import React from "react";
//import Navbar from "./Navbar";
import image from "../../Image1.png";
import image2 from "../../Image2.png";
import image3 from "../../Image3.png";
import Section from "./Section";
import Button from "./Button";
import Navbar from "./Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import { NavLink, Route } from "react-router-dom";

function Dashboard() {
  const section1heading = "Lorem Ipsum is simply dummy text of the printing";
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className=" dashboard container-fluid ">
        <div className="row section-height">
          <div className="col-sm-12  col-md-6 place  align-self-center">
            <div className="info">
              <h1 className="info-heading">
                Get the best of <span className="highlight">Design</span> and
                <span className="highlight"> Code</span>.
              </h1>
              <div className="info-content" style={{ textAlign: "left" }}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into
                </p>
              </div>
              <div className="Buttons">
                <div className="row">
                  <div className="col-12 d-flex">
                    <span style={{ paddingRight: "2em" }}>
                      <Link
                        activeClass="activex"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <a href="services" className="activex">
                          <Button line={"Learn more"} />
                        </a>
                      </Link>
                    </span>
                    <Button button={"2"} line={"Get a quote"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-6 placex  align-self-center">
            <img src={image} className="img-fluid pr-4" alt="illustration" />
          </div>
        </div>
      </div>
      <Section
        image={image2}
        heading={"We use the latest web technologies you can rely on"}
        content={section1heading}
        id="services"
      />
      <Section
        image={image3}
        heading={"We keep up with the latest trends in UI design"}
        content={section1heading}
      />
      <h4 className="pb-3">Lets Develop a beautiful website together !</h4>

      <NavLink className="hover" exact={true} to="/contact-us">
        <div className="d-flex justify-content-center">
          <Button line={"Contact Us"} />
        </div>
      </NavLink>
      <Route exactpath="/contact-us" />

      <Footer />
    </div>
  );
}

export default Dashboard;
