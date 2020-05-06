import React from "react";
import Image4 from "../../Image4.png";
import InputWithIcon from "./InputwithIcon";
import Button from "../layout/Button";
import OuterNavbar from "../layout/OuterNavbar";
function SignIn() {
  return (
    <div>
      <OuterNavbar />
      <div className="container dabba">
        <div className="row px">
          <div className="col-md-12  ">
            <div className="container signINphoto ">
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
              Welcome to Novus,Lets build a<br />
              beautiful website !{" "}
            </h2>
            <div className="container d-flex justify-content-center">
              <InputWithIcon link={"signup"} text={"Not on Novus? Sign up"} />
            </div>

            <div className="container d-flex justify-content-center pt-2">
              <Button line="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
