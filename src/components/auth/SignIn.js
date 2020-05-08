import React, { useContext } from "react";
import Image4 from "../../Image4.png";
import OuterNavbar from "../layout/OuterNavbar";
import Footer from "../layout/Footer";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { auth } from "./Firebase";
import { UserContext } from "../../provider/UserProvider";
import Loggedin from "../layout/Loggedin";
function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [autth, setauth] = useState(false);
  // const data = useContext(UserContext);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    console.log(props);
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
    console.log(auth.currentUser);

    auth.onAuthStateChanged(function(user) {
      if (user) {
        console.log("signin");
        console.log(user.uid);
        setauth(true);
      } else {
        console.log("no sign in bro");
      }
    });
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };
  useEffect(() => {
    console.log("re render triggered");
  }, [autth]);

  return autth ? (
    <Loggedin />
  ) : (
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
              <div className="container ">
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

              <div className="container d-flex justify-content-center pt-2">
                <button
                  className="btn"
                  style={{
                    borderRadius: "5px",
                    padding: "5px 22px 5px 22px"
                  }}
                  type={"submit"}
                  onClick={event => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Sign In{" "}
                </button>
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
