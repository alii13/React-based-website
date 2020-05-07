import React from "react";
import OuterNavbar from "./OuterNavbar";
import { Redirect } from "react-router-dom";
import Counter from "./Countdown";
import ScrollToTop from "./ScrollToTop";

class Succesfull extends React.Component {
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
          <div className="container">
            <h2 className="coloring p-3 text-center"> Message Sent !</h2>
          </div>
          <div className="container">
            <p className="font-weight-light teext text-center">
              Thanks for contacting us you will hear
              <br /> from us shortly. Stay Tuned
            </p>
          </div>
        </div>
        <div className="small text-center">
          <Counter />
        </div>
      </div>
    );
  }
}

export default Succesfull;
