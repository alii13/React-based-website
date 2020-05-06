import React from "react";
import { NavLink, Route } from "react-router-dom";

function OuterNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand hover" exact={true} to="/">
          Novus
        </NavLink>
        <Route exactpath="/" />

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className="navbar-nav mt-lg-0">
            <li className="nav-item ">
              <NavLink activeClassName="active" exact={true} to="/">
                Home
              </NavLink>
              <Route exactpath="/" />
              <Route path="React-based-website/" />
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" exact={true} to="/">
                Services
              </NavLink>
              <Route path="/" />
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/pricing">
                Pricing
              </NavLink>
              <Route path="/pricing" />
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/contact-us">
                Contact Us
              </NavLink>
              <Route a path="/contact-us" />
            </li>
            <li className="nav-item  signup ">
              <NavLink activeClassName="active" to="/signin">
                Sign Up
              </NavLink>
              <Route path="/signin" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default OuterNavbar;
