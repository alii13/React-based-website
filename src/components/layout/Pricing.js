import React from "react";
import Image7 from "../../Image7.png";
import Image6 from "../../Image6.png";
import Image5 from "../../Image5.png";
import Button from "./Button";
import OuterNavbar from "./OuterNavbar";
import { NavLink, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Footer from "./Footer";

function Pricing() {
  let [linked, setLinked] = useState("See More Features");
  const handleClick = e => {
    if (e.currentTarget.classList.contains("collapsed")) {
      setLinked("See More Features");
    } else {
      setLinked("See Less Features");
    }
  };

  let [linkedBasic, setLinkedBasic] = useState("See More Features");
  const handleClickBasic = e => {
    if (e.currentTarget.classList.contains("collapsed")) {
      setLinkedBasic("See More Features");
    } else {
      setLinkedBasic("See Less Features");
    }
  };

  let [linkedPro, setLinkedPro] = useState("See More Features");
  const handleClickPro = e => {
    if (e.currentTarget.classList.contains("collapsed")) {
      setLinkedPro("See More Features");
    } else {
      setLinkedPro("See Less Features");
    }
  };

  return (
    <div>
      <ScrollToTop />
      <OuterNavbar />
      <div className="container main pb-5">
        <div className="container p-5 head">
          <h2 className="text-center">
            Choose the best plan for <br /> for your needs
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 md-6 sm-12 shadow ">
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image7}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>

              <div className="container pt-3">
                <h2 className="text-center">Basic</h2>
                <h3 className="pricetag text-center">100$</h3>
              </div>
              <div className="container-fluid pt-3">
                <ul class=" text-left" style={{ display: "block" }}>
                  <li class="p-2">
                    <div className="right">1 Website</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1 Email</div>
                  </li>
                  <li class="p-2">
                    <div className="right">Limited Bandwidth (100 GB)</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1X Allocated Resources</div>
                  </li>
                </ul>
                <div class="collapse" id="collapseExample1">
                  <ul class=" text-left" style={{ display: "block" }}>
                    <li class="p-2">
                      <div className="right">Free SSL Certificate</div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">LiteSpeed Cache</div>
                    </li>
                    <li class="p-2 ">
                      <div className="partial-right">
                        WordPress Acceleration (LSCWP)
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">
                        Cloudflare Protected Nameservers
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">Github Integration</div>
                    </li>
                    <li class="p-2 ">
                      <div className="wrong">24/7/365 Support</div>
                    </li>
                  </ul>
                </div>
                <p
                  className="text-primary text-center pointer"
                  data-toggle="collapse"
                  data-target="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                  onClick={handleClickBasic}
                >
                  {linkedBasic}
                </p>
                <div className="container d-flex justify-content-center p-3">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    to="/pricing-details"
                    className="hover"
                  >
                    <Button line={"Choose"} type={"submit"} />
                  </NavLink>
                  <Route exactpath="/pricing-details" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-6 sm-12 shadow">
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image6}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>

              <div className="container pt-3">
                <h2 className="text-center">Professional</h2>
                <h3 className="pricetag text-center">200$</h3>
              </div>
              <div className="container-fluid pt-3">
                <ul class=" text-left" style={{ display: "block" }}>
                  <li class="p-2">
                    <div className="right">1 Website</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1 Email</div>
                  </li>
                  <li class="p-2">
                    <div className="right">Limited Bandwidth (100 GB)</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1X Allocated Resources</div>
                  </li>
                </ul>
                <div class="collapse" id="collapseExample2">
                  <ul class=" text-left" style={{ display: "block" }}>
                    <li class="p-2">
                      <div className="right">Free SSL Certificate</div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">LiteSpeed Cache</div>
                    </li>
                    <li class="p-2 ">
                      <div className="partial-right">
                        WordPress Acceleration (LSCWP)
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">
                        Cloudflare Protected Nameservers
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">Github Integration</div>
                    </li>
                    <li class="p-2 ">
                      <div className="wrong">24/7/365 Support</div>
                    </li>
                  </ul>
                </div>
                <p
                  className="text-primary text-center pointer"
                  data-toggle="collapse"
                  data-target="#collapseExample2"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                  onClick={handleClickPro}
                >
                  {linkedPro}
                </p>
                <div className="container d-flex justify-content-center p-3">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    to="/pricing-details"
                    className="hover"
                  >
                    <Button line={"Choose"} type={"submit"} />
                  </NavLink>
                  <Route exactpath="/pricing-details" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-6 sm-12 shadow ">
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image5}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>

              <div className="container pt-3">
                <h2 className="text-center">Enterprise</h2>
                <h3 className="pricetag text-center">Custom</h3>
              </div>
              <div className="container-fluid pt-3">
                <ul class=" text-left" style={{ display: "block" }}>
                  <li class="p-2">
                    <div className="right">1 Website</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1 Email</div>
                  </li>
                  <li class="p-2">
                    <div className="right">Limited Bandwidth (100 GB)</div>
                  </li>
                  <li class="p-2">
                    <div className="right">1X Allocated Resources</div>
                  </li>
                </ul>
                <div class="collapse" id="collapseExample">
                  <ul class=" text-left" style={{ display: "block" }}>
                    <li class="p-2">
                      <div className="right">Free SSL Certificate</div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">LiteSpeed Cache</div>
                    </li>
                    <li class="p-2 ">
                      <div className="partial-right">
                        WordPress Acceleration (LSCWP)
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">
                        Cloudflare Protected Nameservers
                      </div>
                    </li>
                    <li class="p-2 ">
                      <div className="right">Github Integration</div>
                    </li>
                    <li class="p-2 ">
                      <div className="wrong">24/7/365 Support</div>
                    </li>
                  </ul>
                </div>
                <p
                  className="text-primary text-center pointer"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={handleClick}
                >
                  {linked}
                </p>
                <div className="container d-flex justify-content-center p-3">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    to="/pricing-details"
                    className="hover"
                  >
                    <Button line={"Choose"} type={"submit"} />
                  </NavLink>
                  <Route exactpath="/pricing-details" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
