import React from "react";
import Image4 from "../../Image4.png";
import InputWithIcon from "./InputwithIcon";
import Button from "../layout/Button";
import OuterNavbar from "../layout/OuterNavbar";
import Footer from "../layout/Footer";
import InputField from "../layout/InputField";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { auth } from "./Firebase";
import { generateUserDocument } from "./Firebase";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    console.log("data");
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError("Error Signing up with email and password");
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };
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
            <h2 className="sign-heading text-center">
              Welcome Back to Novus,Login to get a<br />
              beautiful website !
            </h2>
            <form>
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
              <button
                className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
                onClick={event => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Sign up
              </button>
              <div className="container d-flex justify-content-center pt-2">
                <Button line="Sign Up" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
