import React from "react";
import Image7 from "../../Image7.png";
import Image6 from "../../Image6.png";
import Image5 from "../../Image5.png";
import { width } from "@material-ui/system";
import Button from "./Button";

function Pricing() {
  return (
    <div>
      <div className="container">
        <div className="container p-5 head">
          <h2>
            Choose the best plan for <br /> for your needs
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 md-6 sm-12 mb-3" style={{ height: "100vh" }}>
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image7}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>
              <div className="container pt-3">
                <h2>Standard</h2>
                <h3 className="pricetag">$100</h3>
                <div className="container pt-3">
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <div className="container d-flex justify-content-center p-3">
                    <Button line={"Choose"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 md-6 sm-12 col-md-offset-2 mb-3"
            style={{ height: "100vh" }}
          >
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image6}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>
              <div className="container pt-3">
                <h2>Professional</h2>
                <h3 className="pricetag">$200</h3>
                <div className="container pt-3">
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <div className="container d-flex justify-content-center p-3">
                    <Button line={"Choose"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 md-6 sm-12 " style={{ height: "100vh" }}>
            <div className="container p-5 price-card">
              <div className="container d-flex justify-content-center">
                <img
                  src={Image5}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>
              <div className="container pt-3">
                <h2>Enterprise</h2>
                <h3 className="pricetag">Custom</h3>
                <div className="container pt-3">
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <p className="feature">Feature 1</p>
                  <div className="container d-flex justify-content-center p-3">
                    <Button line={"Choose"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
