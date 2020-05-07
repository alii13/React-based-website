import React from "react";
import OuterNavbar from "./OuterNavbar";
import { Redirect } from "react-router-dom";
import Counter from "./Countdown";
import ScrollToTop from "./ScrollToTop";
import Searching from "../../searching.svg";

class Error extends React.Component {
  state = {
    redirect: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        redirect: true
      });
    }, 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <ScrollToTop />
        <OuterNavbar />
        <div className="container padd">
          <div className="container d-flex justify-content-center">
            <embed src={Searching} style={{ height: "5em", width: "12em" }} />
          </div>
          <h2 className="coloring p-3 text-center"> Sorry Page Not Found!</h2>
        </div>
        <div className="small text-center">
          <Counter />
        </div>
      </div>
    );
  }
}

export default Error;
