import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";
import Pricing from "./components/layout/Pricing";
import Details from "./components/layout/Details";
import Redirect from "./components/layout/Redirectx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/pricing-details" component={Details} />
          <Route exact path="/thank-you" component={Redirect} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
