import React from "react";
import Image4 from "../../Image4.png";
import InputWithIcon from "./InputwithIcon";
import Button from "../layout/Button";
import OuterNavbar from "../layout/OuterNavbar";
import Footer from "../layout/Footer";
import InputField from "../layout/InputField";
function SignUp() {
  return (
    <div>
      <OuterNavbar />
      <div className="container dabba">
        <div className="row px">
          <div className="col-md-12 ">
            <div className="container Signuphoto">
              <img
                src={Image4}
                className="img-fluid image"
                alt="illustration"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
        </div>
        <div className="row padding">
          <div className="container">
            <h2 className="sign-heading">
              Welcome Back to Novus,Login to get a<br />
              beautiful website !{" "}
            </h2>
            <InputField id="emailsignup" type="email" label="Email" />
            <InputField
              id="confirmpassword"
              type="password"
              label="Confirm Password"
            />
            <InputField id="passwordsignup" type="password" label="Password" />
            <InputField id="phone" type="text" label="Phone Number" />
            <div className="container d-flex justify-content-center pt-2">
              <Button line="Sign Up" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
