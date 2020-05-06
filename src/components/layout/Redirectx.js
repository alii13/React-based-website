import React from "react";
import OuterNavbar from "./OuterNavbar";
import { Redirect } from "react-router-dom";
import Counter from "./Countdown";

class Redirectx extends React.Component {
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
        <OuterNavbar />
        <div className="container padd">
          <div className="container">
            <h2 className="coloring p-3"> Thank You !</h2>
          </div>
          <div className="container">
            <p className="font-weight-light teext">
              You will recieve a call from us within 12 hours,
              <br />
              thanks for your patience
            </p>
          </div>
        </div>
        <div className="small">
          <Counter />
        </div>
      </div>
    );
  }
}

export default Redirectx;
