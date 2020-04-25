import React from "react";
import Image4 from "../../Image4.png";
import InputWithIcon from "./InputwithIcon";
function SignUp() {
  return (
    <div>
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
            <div className="container d-flex justify-content-center">
              <InputWithIcon link={"signin"} text={"Sign In"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
