import React from "react";
import Button from "./Button";
import Icons from "./Icons";

function Footer() {
  return (
    <div>
      <hr
        style={{
          backgroundColor: "black",
          width: "93%",
          height: 1.6
        }}
      />
      <div className="container-fluid pt-3 pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row ">
              <div className="col-md-5 col-xs-12 d-inline-flex flex-wrap justify-content-center add">
                <div className="link">Home</div>
                <div className="link">Services</div>
                <div className="link">Pricing</div>
                <div className="link">Contact Us</div>
              </div>
              <div className="col-md-3 p-0">
                <div className="">
                  <span className="d-flex justify-content-center add">
                    <input className="input" />
                    <button
                      className="btn"
                      style={{
                        borderRadius: "0px",
                        padding: "5px 22px 5px 22px"
                      }}
                    >
                      Send{" "}
                    </button>
                  </span>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <p className="pt-2 text-dark">Follow us on</p>
                <Icons />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright pt-5">Copyright (c) 2020 Novus</div>
      </div>
    </div>
  );
}

export default Footer;
