import React from "react";
import OuterNavbar from "./OuterNavbar";
import Button from "./Button";
import { withRouter } from "react-router-dom";
class Details extends React.Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/thank-you");
  }
  render() {
    return (
      <div>
        <OuterNavbar />
        <section>
          <div className="container p-3">
            <div className="container pb-3">
              <h2>Tell us more about your requirements</h2>
            </div>
            <div className="container details p-5">
              <form onSubmit={this.submitForm.bind(this)}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input"
                  />
                </div>
                <div class="form-group">
                  <select
                    class="form-control disabled"
                    id="exampleFormControlSelect1"
                    required
                  >
                    <option value="disabled selected">
                      Type of website needed
                    </option>
                    <option value="Blog">Blog</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Regular Landing Page for company">
                      Regular Landing Page for company
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="2"
                    placeholder="Website description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Example input"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="container d-flex justify-content-center p-3">
                  <Button line="submit" type={"submit"} />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Details);
