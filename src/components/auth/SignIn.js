import React from "react";
import Image4 from "../../Image4.png";
import InputWithIcon from "./InputwithIcon";
import Button from "../layout/Button";
import OuterNavbar from "../layout/OuterNavbar";
import Footer from "../layout/Footer";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { auth } from "./Firebase";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
      console.log(name);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
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
            <h2 className="sign-heading text-center">
              Welcome to Novus,Lets build a<br />
              beautiful website !{" "}
            </h2>
            <form>
              <div className="container d-flex justify-content-center">
                <div className="container mine">
                  <div className="pb-2">
                    <TextField
                      id="email"
                      type="email"
                      label="Email"
                      name="userEmail"
                      onChange={event => onChangeHandler(event)}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="container mine">
                  <div className="pb-2">
                    <TextField
                      id="password"
                      type="password"
                      label="Password"
                      name="userPassword"
                      onChange={event => onChangeHandler(event)}
                      fullWidth
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                onClick={event => {
                  signInWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Sign in
              </button>

              <div className="container d-flex justify-content-center pt-2">
                <Button line="Sign In" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
