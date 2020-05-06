import React from "react";
import Icons from "./Icons";
import { withRouter } from "react-router-dom";

export class Footer extends React.Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/message-sent");
  }
  render() {
    return (
      <div>
        <hr
          style={{
            backgroundColor: "black",
            width: "93%",
            height: 1.6
          }}
        />
        <div className="container-fluid pt-3 pb-5 footer">
          <div className="row">
            <div className="col-md-12">
              <div className="row ">
                <div className="col-md-4 col-xs-12 d-inline-flex flex-wrap justify-content-center add">
                  <div className="link">Home</div>
                  <div className="link">Services</div>
                  <div className="link">Pricing</div>
                  <div className="link">Contact Us</div>
                </div>
                <div className="col-md-4 p-0">
                  <div className="">
                    <form onSubmit={this.submitForm.bind(this)}>
                      <span className="d-flex justify-content-center add">
                        <input
                          class="form-control input"
                          type="text"
                          placeholder="Message"
                        />
                        <button
                          className="btn"
                          style={{
                            borderRadius: "0px",
                            padding: "5px 22px 5px 22px"
                          }}
                          type={"submit"}
                        >
                          Send{" "}
                        </button>
                      </span>
                    </form>
                  </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                  <p className="pt-2 text-dark">Follow us on</p>
                  <Icons />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright pt-5">Copyright (c) 2020 Novus</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
