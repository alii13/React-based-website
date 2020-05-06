import React, { Component } from "react";
import Image from "../../Image8.png";
import Button from "./Button";
import InputField from "./InputField";
import OuterNavbar from "./OuterNavbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export class Contact extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/message-sent");
    console.log(this.props.history);
  }
  render() {
    return (
      <div>
        <ScrollToTop />
        <OuterNavbar />
        <div className="wrapper">
          <div className="heading p-5">
            <h2>Got a question? send it to us</h2>
          </div>
          <div
            className="contactus mt-5"
            style={{
              backgroundColor: "#f36f21eb",
              height: "75.5vh"
            }}
          >
            <div className="hide">
              <div className="container d-flex justify-content-center pt-3">
                <img
                  src={Image}
                  className="img-fluid mobile-plane"
                  alt="illustration"
                />
              </div>
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="container p-3">
                  <InputField
                    type={"text"}
                    label={"First Name"}
                    id={"firstName"}
                  />
                  <InputField
                    type={"text"}
                    label={"Last Name"}
                    id={"lastName"}
                  />
                  <InputField type={"text"} label={"Your Query"} id={"query"} />
                  <div className="container d-flex justify-content-center p-3">
                    <Button line={"Send"} />
                  </div>
                </div>
              </form>
            </div>
            <div
              className="contact2"
              style={{
                backgroundColor: "#ffffff",
                height: "75vh"
              }}
            >
              <div className="container d-flex justify-content-center pt-3">
                <img
                  src={Image}
                  className="img-fluid contact-plane"
                  alt="illustration"
                />
              </div>
              <form onSubmit={this.submitForm.bind(this)}>
                <div className="container p-3">
                  <InputField
                    type={"text"}
                    label={"First Name"}
                    id={"firstName"}
                  />
                  <InputField
                    type={"text"}
                    label={"Last Name"}
                    id={"lastName"}
                  />
                  <InputField type={"text"} label={"Your Query"} id={"query"} />
                  <div className="container d-flex justify-content-center p-3">
                    <Button line={"Send"} type="submit" />
                  </div>
                </div>
              </form>
            </div>
            <div
              className="contact3"
              style={{
                backgroundColor: "#f36f21",
                height: "75vh"
              }}
            ></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
